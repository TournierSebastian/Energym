import { Component } from '@angular/core';
import { ClaseService } from '../../services/clase/clase.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Clases } from '../../interfaces/clases';
import { CardComponent } from "../../component/card/card.component";
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { ReservasService } from '../../services/reservas/reservas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clases',
  imports: [CardComponent, NavbarComponent, CommonModule],
  templateUrl: './clases.component.html',
  styleUrl: './clases.component.css'
})
export class ClasesComponent {
  error: string | null = null
  Clases: Clases[] = [] as Clases[]
  
  constructor(private claseService: ClaseService, private router: Router, private toastrService: ToastrService, private reservaService: ReservasService){}

  revervarClick(nroClase: number){

    this.reservaService.CreateRerva(nroClase).subscribe(
      {
        next: () => {
          this.toastrService.success('Reserva Agregada')
        },
        error: (error) => {
          this.toastrService.error('Error al Agregar Reserva')
          this.error = error.message
        }
      }
    )
  }
  ngOnInit(){
    this.Clases = [
    {
        "nroClase": 21,
        "nombreClase": "pilates",
        "fecha": "2025-05-06",
        "hora": "14:00",
        "capacidad": 30,
        "inscriptos": 11,
        "nombreEntrenador": "juan",
        "nombreSucursal": "General Paz"
    },
    {
        "nroClase": 22,
        "nombreClase": "yoga",
        "fecha": "2025-05-06",
        "hora": "15:00",
        "capacidad": 30,
        "inscriptos": 12,
        "nombreEntrenador": "carla",
        "nombreSucursal": "General Paz"
    },
    {
        "nroClase": 23,
        "nombreClase": "funcional",
        "fecha": "2025-05-06",
        "hora": "16:00",
        "capacidad": 30,
        "inscriptos": 29,
        "nombreEntrenador": "carla",
        "nombreSucursal": "General Paz"
    },
    {
        "nroClase": 24,
        "nombreClase": "sumba",
        "fecha": "2025-05-06",
        "hora": "17:00",
        "capacidad": 30,
        "inscriptos": 4,
        "nombreEntrenador": "carlos",
        "nombreSucursal": "General Paz"
    },
    {
        "nroClase": 25,
        "nombreClase": "kick boxing",
        "fecha": "2025-05-06",
        "hora": "18:00",
        "capacidad": 30,
        "inscriptos": 24,
        "nombreEntrenador": "carlos",
        "nombreSucursal": "General Paz"
    },
    {
        "nroClase": 26,
        "nombreClase": "pilates",
        "fecha": "2025-05-07",
        "hora": "14:00",
        "capacidad": 30,
        "inscriptos": 30,
        "nombreEntrenador": "juan",
        "nombreSucursal": "General Paz"
    },
    {
        "nroClase": 27,
        "nombreClase": "pilates",
        "fecha": "2025-04-30",
        "hora": "14:00",
        "capacidad": 30,
        "inscriptos": 11,
        "nombreEntrenador": "juan",
        "nombreSucursal": "General Paz"
    },
    {
        "nroClase": 28,
        "nombreClase": "yoga",
        "fecha": "2025-04-30",
        "hora": "15:00",
        "capacidad": 30,
        "inscriptos": 12,
        "nombreEntrenador": "carla",
        "nombreSucursal": "General Paz"
    },
    {
        "nroClase": 29,
        "nombreClase": "funcional",
        "fecha": "2025-04-30",
        "hora": "16:00",
        "capacidad": 30,
        "inscriptos": 29,
        "nombreEntrenador": "carla",
        "nombreSucursal": "General Paz"
    },
    {
        "nroClase": 30,
        "nombreClase": "sumba",
        "fecha": "2025-04-30",
        "hora": "17:00",
        "capacidad": 30,
        "inscriptos": 4,
        "nombreEntrenador": "carlos",
        "nombreSucursal": "General Paz"
    },
    {
        "nroClase": 31,
        "nombreClase": "kick boxing",
        "fecha": "2025-04-30",
        "hora": "18:00",
        "capacidad": 30,
        "inscriptos": 23,
        "nombreEntrenador": "carlos",
        "nombreSucursal": "General Paz"
    },
    {
        "nroClase": 32,
        "nombreClase": "pilates",
        "fecha": "2025-03-31",
        "hora": "14:00",
        "capacidad": 30,
        "inscriptos": 11,
        "nombreEntrenador": "juan",
        "nombreSucursal": "Nueva Córdoba"
    },
    {
        "nroClase": 33,
        "nombreClase": "yoga",
        "fecha": "2025-03-31",
        "hora": "15:00",
        "capacidad": 30,
        "inscriptos": 12,
        "nombreEntrenador": "carla",
        "nombreSucursal": "Nueva Córdoba"
    },
    {
        "nroClase": 34,
        "nombreClase": "funcional",
        "fecha": "2025-03-31",
        "hora": "16:00",
        "capacidad": 30,
        "inscriptos": 29,
        "nombreEntrenador": "carla",
        "nombreSucursal": "Nueva Córdoba"
    },
    {
        "nroClase": 35,
        "nombreClase": "sumba",
        "fecha": "2025-03-31",
        "hora": "17:00",
        "capacidad": 30,
        "inscriptos": 4,
        "nombreEntrenador": "carlos",
        "nombreSucursal": "Nueva Córdoba"
    },
    {
        "nroClase": 36,
        "nombreClase": "kick boxing",
        "fecha": "2025-03-31",
        "hora": "18:00",
        "capacidad": 30,
        "inscriptos": 23,
        "nombreEntrenador": "carlos",
        "nombreSucursal": "Nueva Córdoba"
    },
    {
        "nroClase": 37,
        "nombreClase": "pilates",
        "fecha": "2025-03-30",
        "hora": "14:00",
        "capacidad": 30,
        "inscriptos": 11,
        "nombreEntrenador": "juan",
        "nombreSucursal": "Nueva Córdoba"
    },
    {
        "nroClase": 38,
        "nombreClase": "yoga",
        "fecha": "2025-03-30",
        "hora": "15:00",
        "capacidad": 30,
        "inscriptos": 12,
        "nombreEntrenador": "carla",
        "nombreSucursal": "Nueva Córdoba"
    },
    {
        "nroClase": 39,
        "nombreClase": "funcional",
        "fecha": "2025-03-30",
        "hora": "16:00",
        "capacidad": 30,
        "inscriptos": 29,
        "nombreEntrenador": "carla",
        "nombreSucursal": "Nueva Córdoba"
    },
    {
        "nroClase": 40,
        "nombreClase": "sumba",
        "fecha": "2025-03-30",
        "hora": "17:00",
        "capacidad": 30,
        "inscriptos": 4,
        "nombreEntrenador": "carlos",
        "nombreSucursal": "Nueva Córdoba"
    },
    {
        "nroClase": 41,
        "nombreClase": "kick boxing",
        "fecha": "2025-03-30",
        "hora": "18:00",
        "capacidad": 30,
        "inscriptos": 23,
        "nombreEntrenador": "carlos",
        "nombreSucursal": "Nueva Córdoba"
    },
    {
        "nroClase": 42,
        "nombreClase": "pilates",
        "fecha": "2025-03-29",
        "hora": "14:00",
        "capacidad": 30,
        "inscriptos": 11,
        "nombreEntrenador": "juan",
        "nombreSucursal": "Nueva Córdoba"
    },
    {
        "nroClase": 43,
        "nombreClase": "yoga",
        "fecha": "2025-03-29",
        "hora": "15:00",
        "capacidad": 30,
        "inscriptos": 12,
        "nombreEntrenador": "carla",
        "nombreSucursal": "Nueva Córdoba"
    },
    {
        "nroClase": 44,
        "nombreClase": "funcional",
        "fecha": "2025-03-29",
        "hora": "16:00",
        "capacidad": 30,
        "inscriptos": 29,
        "nombreEntrenador": "carla",
        "nombreSucursal": "Nueva Córdoba"
    },
    {
        "nroClase": 45,
        "nombreClase": "sumba",
        "fecha": "2025-03-29",
        "hora": "17:00",
        "capacidad": 30,
        "inscriptos": 4,
        "nombreEntrenador": "carlos",
        "nombreSucursal": "Nueva Córdoba"
    },
    {
        "nroClase": 46,
        "nombreClase": "kick boxing",
        "fecha": "2025-03-29",
        "hora": "18:00",
        "capacidad": 30,
        "inscriptos": 23,
        "nombreEntrenador": "carlos",
        "nombreSucursal": "Nueva Córdoba"
    },
    {
        "nroClase": 47,
        "nombreClase": "pilates",
        "fecha": "2025-05-15",
        "hora": "14:00",
        "capacidad": 30,
        "inscriptos": 0,
        "nombreEntrenador": "juan",
        "nombreSucursal": "Nueva Córdoba"
    },
    {
        "nroClase": 48,
        "nombreClase": "yoga",
        "fecha": "2025-05-15",
        "hora": "15:00",
        "capacidad": 30,
        "inscriptos": 0,
        "nombreEntrenador": "carla",
        "nombreSucursal": "Nueva Córdoba"
    },
    {
        "nroClase": 49,
        "nombreClase": "funcional",
        "fecha": "2025-05-15",
        "hora": "16:00",
        "capacidad": 30,
        "inscriptos": 0,
        "nombreEntrenador": "carla",
        "nombreSucursal": "Nueva Córdoba"
    },
    {
        "nroClase": 50,
        "nombreClase": "sumba",
        "fecha": "2025-05-15",
        "hora": "17:00",
        "capacidad": 30,
        "inscriptos": 0,
        "nombreEntrenador": "carlos",
        "nombreSucursal": "Nueva Córdoba"
    },
    {
        "nroClase": 51,
        "nombreClase": "kick boxing",
        "fecha": "2025-05-15",
        "hora": "18:00",
        "capacidad": 30,
        "inscriptos": 0,
        "nombreEntrenador": "carlos",
        "nombreSucursal": "Nueva Córdoba"
    },
    {
        "nroClase": 52,
        "nombreClase": "spinning",
        "fecha": "2025-05-16",
        "hora": "14:00",
        "capacidad": 30,
        "inscriptos": 0,
        "nombreEntrenador": "juan",
        "nombreSucursal": "Nueva Córdoba"
    },
    {
        "nroClase": 53,
        "nombreClase": "karate",
        "fecha": "2025-05-16",
        "hora": "15:00",
        "capacidad": 30,
        "inscriptos": 0,
        "nombreEntrenador": "carla",
        "nombreSucursal": "Nueva Córdoba"
    },
    {
        "nroClase": 54,
        "nombreClase": "taekeando",
        "fecha": "2025-05-16",
        "hora": "16:00",
        "capacidad": 30,
        "inscriptos": 0,
        "nombreEntrenador": "carla",
        "nombreSucursal": "Nueva Córdoba"
    },
    {
        "nroClase": 55,
        "nombreClase": "kendo",
        "fecha": "2025-05-16",
        "hora": "17:00",
        "capacidad": 30,
        "inscriptos": 0,
        "nombreEntrenador": "carlos",
        "nombreSucursal": "Nueva Córdoba"
    },
    {
        "nroClase": 56,
        "nombreClase": "natacion",
        "fecha": "2025-05-16",
        "hora": "18:00",
        "capacidad": 30,
        "inscriptos": 0,
        "nombreEntrenador": "carlos",
        "nombreSucursal": "Nueva Córdoba"
    },
    {
        "nroClase": 57,
        "nombreClase": "pilates",
        "fecha": "2025-05-15",
        "hora": "14:00",
        "capacidad": 30,
        "inscriptos": 0,
        "nombreEntrenador": "juan",
        "nombreSucursal": "Cofico"
    },
    {
        "nroClase": 58,
        "nombreClase": "yoga",
        "fecha": "2025-05-15",
        "hora": "15:00",
        "capacidad": 30,
        "inscriptos": 0,
        "nombreEntrenador": "carla",
        "nombreSucursal": "Cofico"
    },
    {
        "nroClase": 59,
        "nombreClase": "funcional",
        "fecha": "2025-05-15",
        "hora": "16:00",
        "capacidad": 30,
        "inscriptos": 0,
        "nombreEntrenador": "carla",
        "nombreSucursal": "Cofico"
    },
    {
        "nroClase": 60,
        "nombreClase": "sumba",
        "fecha": "2025-05-15",
        "hora": "17:00",
        "capacidad": 30,
        "inscriptos": 0,
        "nombreEntrenador": "carlos",
        "nombreSucursal": "Cofico"
    },
    {
        "nroClase": 61,
        "nombreClase": "kick boxing",
        "fecha": "2025-05-15",
        "hora": "18:00",
        "capacidad": 30,
        "inscriptos": 0,
        "nombreEntrenador": "carlos",
        "nombreSucursal": "Cofico"
    },
    {
        "nroClase": 62,
        "nombreClase": "spinning",
        "fecha": "2025-05-16",
        "hora": "14:00",
        "capacidad": 30,
        "inscriptos": 0,
        "nombreEntrenador": "juan",
        "nombreSucursal": "Cofico"
    },
    {
        "nroClase": 63,
        "nombreClase": "karate",
        "fecha": "2025-05-16",
        "hora": "15:00",
        "capacidad": 30,
        "inscriptos": 0,
        "nombreEntrenador": "carla",
        "nombreSucursal": "Cofico"
    },
    {
        "nroClase": 64,
        "nombreClase": "taekeando",
        "fecha": "2025-05-16",
        "hora": "16:00",
        "capacidad": 30,
        "inscriptos": 0,
        "nombreEntrenador": "carla",
        "nombreSucursal": "Cofico"
    },
    {
        "nroClase": 65,
        "nombreClase": "kendo",
        "fecha": "2025-05-16",
        "hora": "17:00",
        "capacidad": 30,
        "inscriptos": 0,
        "nombreEntrenador": "carlos",
        "nombreSucursal": "Cofico"
    },
    {
        "nroClase": 66,
        "nombreClase": "natacion",
        "fecha": "2025-05-16",
        "hora": "18:00",
        "capacidad": 30,
        "inscriptos": 0,
        "nombreEntrenador": "carlos",
        "nombreSucursal": "Cofico"
    },
    {
        "nroClase": 67,
        "nombreClase": "pilates",
        "fecha": "2025-05-15",
        "hora": "14:00",
        "capacidad": 30,
        "inscriptos": 0,
        "nombreEntrenador": "juan",
        "nombreSucursal": "General Paz"
    },
    {
        "nroClase": 68,
        "nombreClase": "yoga",
        "fecha": "2025-05-15",
        "hora": "15:00",
        "capacidad": 30,
        "inscriptos": 0,
        "nombreEntrenador": "carla",
        "nombreSucursal": "General Paz"
    },
    {
        "nroClase": 69,
        "nombreClase": "funcional",
        "fecha": "2025-05-15",
        "hora": "16:00",
        "capacidad": 30,
        "inscriptos": 0,
        "nombreEntrenador": "carla",
        "nombreSucursal": "General Paz"
    },
    {
        "nroClase": 70,
        "nombreClase": "sumba",
        "fecha": "2025-05-15",
        "hora": "17:00",
        "capacidad": 30,
        "inscriptos": 0,
        "nombreEntrenador": "carlos",
        "nombreSucursal": "General Paz"
    },
    {
        "nroClase": 71,
        "nombreClase": "kick boxing",
        "fecha": "2025-05-15",
        "hora": "18:00",
        "capacidad": 30,
        "inscriptos": 0,
        "nombreEntrenador": "carlos",
        "nombreSucursal": "General Paz"
    },
    {
        "nroClase": 72,
        "nombreClase": "spinning",
        "fecha": "2025-05-16",
        "hora": "14:00",
        "capacidad": 30,
        "inscriptos": 0,
        "nombreEntrenador": "juan",
        "nombreSucursal": "General Paz"
    },
    {
        "nroClase": 73,
        "nombreClase": "karate",
        "fecha": "2025-05-16",
        "hora": "15:00",
        "capacidad": 30,
        "inscriptos": 0,
        "nombreEntrenador": "carla",
        "nombreSucursal": "General Paz"
    },
    {
        "nroClase": 74,
        "nombreClase": "taekeando",
        "fecha": "2025-05-16",
        "hora": "16:00",
        "capacidad": 30,
        "inscriptos": 0,
        "nombreEntrenador": "carla",
        "nombreSucursal": "General Paz"
    },
    {
        "nroClase": 75,
        "nombreClase": "kendo",
        "fecha": "2025-05-16",
        "hora": "17:00",
        "capacidad": 30,
        "inscriptos": 0,
        "nombreEntrenador": "carlos",
        "nombreSucursal": "General Paz"
    },
    {
        "nroClase": 76,
        "nombreClase": "natacion",
        "fecha": "2025-05-16",
        "hora": "18:00",
        "capacidad": 30,
        "inscriptos": 0,
        "nombreEntrenador": "carlos",
        "nombreSucursal": "General Paz"
    }
]
    //this.LoadClases();
  }
  LoadClases(){
    this.claseService.fetchAllClases().subscribe(
      {
        next: (res) => {
          this.Clases = res.data;
        },
        error: (error) => {
          this.error = error.message
        }
      }
    )
  }

}
