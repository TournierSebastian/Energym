import { Component } from '@angular/core';
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { ReservasService } from '../../services/reservas/reservas.service';
import { Reserva } from '../../interfaces/reserva';
import { CardComponent } from "../../component/card/card.component";
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-perfil',
  imports: [NavbarComponent, CardComponent, CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  error: string | null = null
  Reserva: Reserva[] = [] as Reserva[]
  constructor(private reservaService: ReservasService, private toastrService: ToastrService) { }

  EliminarClick(nroClase: number) {
    this.reservaService.DeleteReserva(nroClase).subscribe(
      {
        next: () => {
          this.toastrService.success('Eliminado', 'Exito')
        },
        error: (error) => {
          this.toastrService.error('Error al eliminar', 'Fallo')
          this.error = error.message
        }
      }
    )
  }
  ngOnInit() {
    let data =
      [
        {
          "nroReserva": 17,
          "asistencia": null,
          "fechaReserva": "2025-05-15",
          "clase": {
            "nroClase": 57,
            "nombreClase": "pilates",
            "fecha": "2025-05-15",
            "hora": "14:00",
            "capacidad": 30,
            "inscriptos": 1,
            "nombreEntrenador": "juan",
            "nombreSucursal": "Cofico"
          }
        },
        {
          "nroReserva": 18,
          "asistencia": null,
          "fechaReserva": "2025-05-15",
          "clase": {
            "nroClase": 55,
            "nombreClase": "kendo",
            "fecha": "2025-05-16",
            "hora": "17:00",
            "capacidad": 30,
            "inscriptos": 1,
            "nombreEntrenador": "carlos",
            "nombreSucursal": "Nueva Córdoba"
          }
        },
        {
          "nroReserva": 19,
          "asistencia": null,
          "fechaReserva": "2025-05-15",
          "clase": {
            "nroClase": 50,
            "nombreClase": "sumba",
            "fecha": "2025-05-15",
            "hora": "17:00",
            "capacidad": 30,
            "inscriptos": 1,
            "nombreEntrenador": "carlos",
            "nombreSucursal": "Nueva Córdoba"
          }
        },
        {
          "nroReserva": 20,
          "asistencia": null,
          "fechaReserva": "2025-05-15",
          "clase": {
            "nroClase": 51,
            "nombreClase": "kick boxing",
            "fecha": "2025-05-15",
            "hora": "18:00",
            "capacidad": 30,
            "inscriptos": 1,
            "nombreEntrenador": "carlos",
            "nombreSucursal": "Nueva Córdoba"
          }
        },
        {
          "nroReserva": 21,
          "asistencia": null,
          "fechaReserva": "2025-05-15",
          "clase": {
            "nroClase": 52,
            "nombreClase": "spinning",
            "fecha": "2025-05-16",
            "hora": "14:00",
            "capacidad": 30,
            "inscriptos": 1,
            "nombreEntrenador": "juan",
            "nombreSucursal": "Nueva Córdoba"
          }
        },
        {
          "nroReserva": 22,
          "asistencia": null,
          "fechaReserva": "2025-05-15",
          "clase": {
            "nroClase": 53,
            "nombreClase": "karate",
            "fecha": "2025-05-16",
            "hora": "15:00",
            "capacidad": 30,
            "inscriptos": 1,
            "nombreEntrenador": "carla",
            "nombreSucursal": "Nueva Córdoba"
          }
        },
        {
          "nroReserva": 23,
          "asistencia": null,
          "fechaReserva": "2025-05-15",
          "clase": {
            "nroClase": 56,
            "nombreClase": "natacion",
            "fecha": "2025-05-16",
            "hora": "18:00",
            "capacidad": 30,
            "inscriptos": 1,
            "nombreEntrenador": "carlos",
            "nombreSucursal": "Nueva Córdoba"
          }
        },
        {
          "nroReserva": 24,
          "asistencia": null,
          "fechaReserva": "2025-05-15",
          "clase": {
            "nroClase": 58,
            "nombreClase": "yoga",
            "fecha": "2025-05-15",
            "hora": "15:00",
            "capacidad": 30,
            "inscriptos": 1,
            "nombreEntrenador": "carla",
            "nombreSucursal": "Cofico"
          }
        },
        {
          "nroReserva": 25,
          "asistencia": null,
          "fechaReserva": "2025-05-15",
          "clase": {
            "nroClase": 59,
            "nombreClase": "funcional",
            "fecha": "2025-05-15",
            "hora": "16:00",
            "capacidad": 30,
            "inscriptos": 1,
            "nombreEntrenador": "carla",
            "nombreSucursal": "Cofico"
          }
        }
      ]
    this.Reserva = data;

  }


  LoadReserva() {
    this.reservaService.MostrarReserva().subscribe(
      {
        next: (res) => {
          this.Reserva = res.data
        },
        error: (error) => {
          this.error = error.message
        }
      }
    )
  }
}
