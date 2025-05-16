import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Socios } from '../../interfaces/socios';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private API_URL = "no soy una api"

  constructor(private http: HttpClient) { }


  register(dni: string, nombre: string, apellido: string, email: string, telefono?: number): Observable<Socios> {

    const data = {
      dni: dni,
      nombre: nombre,
      apellido: apellido,
      email: email,
      telefono: telefono
    }
    return of(data)
    // return this.http.post<Socios>(`${this.API_URL}/register`, data).pipe(
    //   catchError(this.handleError)
    // );
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
        return throwError(() => new Error(errorMessage));
  }
}
