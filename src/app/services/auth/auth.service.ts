import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  isAuthenticated(): boolean{
    const token = localStorage.getItem('token');
    return !!token
  }
  
  login(token: string, dni: number): void {
    localStorage.setItem('token', token);
    localStorage.setItem('dni', dni.toString());
  }

  Token(){
    return localStorage.getItem('token');
  }
  
  Dni(){
    return localStorage.getItem('dni');
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.router.navigate(['']);
  }
}
