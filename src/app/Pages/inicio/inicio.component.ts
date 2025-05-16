import { Component } from '@angular/core';
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { SucursalService } from '../../services/sucursal/sucursal.service';
import { Sucursal } from '../../interfaces/sucursal';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inicio',
  imports: [NavbarComponent, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  error: string | null = null
  Sucursal: Sucursal[] = [] as Sucursal[]

  constructor(private sucursalService: SucursalService, private router: Router, private toastrService: ToastrService) { }
  ngOnInit() {
    // this.loadSurcursal();
    localStorage.removeItem('Sucursal');
    this.Sucursal = [  // Pero intentas asignar un array
      { "nroSucursal": 1, "nombre": "Nueva Córdoba" },
      { "nroSucursal": 2, "nombre": "Cofico" },
      { "nroSucursal": 3, "nombre": "General Paz" }
    ];
  }

  loadSurcursal() {
    this.sucursalService.fetchAllSucursal().subscribe(
      {
        next: (res) => {
          console.log(res.data)
        },
        error: (error) => {
          this.error = error.message
        }
      }
    )
  }

  SelectSucursal(nroSucursal: number, nombre: string) {
    localStorage.setItem('Sucursal', nroSucursal.toString());
    this.toastrService.success(`Sucursal "${nombre}" seleccionada`);
    this.router.navigate(['/clases']);
  }
}
