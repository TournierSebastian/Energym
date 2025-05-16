import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { Login } from '../../interfaces/auth/login';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private API_URL = "no soy una api"
  constructor(private http: HttpClient, private authService: AuthService) { }

  //simulando login hasta tener endpoint
  Login(email: String, password: string):Observable<Login>{
    let token = '';
    let dni: number;
    const login = {
      Email: 'stournier@certant.com',
      password: '12345678'
    }

     if(email == login.Email && password == login.password){
         token = 'soytumejortoken';
         dni = 22333222;
         this.authService.login(token, dni);
         return of({ response: token });
     }else{
            return throwError(() => new Error('Simulación de error del servidor'));
    }

    // Como deberia quedar el login con la api 

    // return this.http.post<Login>(`${this.API_URL}/login`, {email, password}).pipe(
    //   tap((loginResponse: Login) => {
    //     const token = loginResponse; 
    //     this.authService.login(token.response);
    //   }),
    //   catchError((error) => this.handleError(error))
    // );

  }
  //Revisar manejo de errores
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
