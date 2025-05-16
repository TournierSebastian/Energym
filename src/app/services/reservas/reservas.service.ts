import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Reserva } from '../../interfaces/reserva';
import { ApiResponse } from '../../interfaces/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  private API_URL = 'http://localhost:8080/api'

  constructor(private http: HttpClient, private authService: AuthService) { }

  MostrarReserva(): Observable<ApiResponse<Reserva[]>> {
    let dni: number = Number(this.authService.Dni);
    return this.http.get<Reserva[]>(`${this.API_URL}/socio/getReservaBySocio/${dni}`).pipe(
      map((data) => ({ data } as ApiResponse<Reserva[]>)),
      catchError(this.handleError));
  }

  CreateRerva(nroClase: Number): Observable<void> {
    let dni: number = Number(this.authService.Dni);
    return this.http.put<void>(`${this.API_URL}/socio/agregarReserva/${nroClase}/${dni}`, null).pipe(
      catchError(this.handleError)
    );
  }

  DeleteReserva(nroClase: Number) {
    let dni: number = Number(this.authService.Dni);
    return this.http.put<void>(`${this.API_URL}/socio/cancelarReserva${dni}/${nroClase}`, null).pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocurrió un error';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      switch (error.status) {
        case 0:
          errorMessage = 'No hay conexión con el servidor';
          break;
        case 400:
          errorMessage = 'Solicitud incorrecta';
          if (error.error?.errors) {
            errorMessage += ': ' + Object.values(error.error.errors).join(', ');
          }
          break;
        case 401:
          errorMessage = 'No autorizado - Por favor inicie sesión';
          break;
        case 403:
          errorMessage = 'Acceso denegado';
          break;
        case 404:
          errorMessage = 'Recurso no encontrado';
          break;
        case 500:
          errorMessage = 'Error interno del servidor';
          if (error.error?.message) {
            errorMessage += `: ${error.error.message}`;
          }
          break;
        default:
          errorMessage = `Error ${error.status}: ${error.statusText || 'Error desconocido'}`;
      }
    }
    console.error(errorMessage, error);
    return throwError(() => new Error(errorMessage));
  }
}
