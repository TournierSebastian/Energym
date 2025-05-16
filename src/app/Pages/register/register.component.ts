import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterService } from '../../services/auth/register.service';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/auth/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  Dni: string = '';
  Nombre: string = '';
  Apellido: string = '';
  Email: string = '';
  Telefono?: number;
  Password: string = '';
  ConfirmPassword: string = '';
  errors = {
    Dni: false,
    Nombre: false,
    Apellido: false,
    Email: false,
    Telefono: false,
    Password: false,
    ConfirmPassword: false
  };
  constructor(private registerService: RegisterService, private toastService: ToastrService, private loginService: LoginService, private router: Router) { };
  HandleSumbit() {
    this.resetErrors();
    let hasErrors = false;

    if (this.Password.length < 8) {
      this.errors.Password = true;
      hasErrors = true;
    }
    if (this.Password !== this.ConfirmPassword) {
      this.errors.ConfirmPassword = true;
      hasErrors = true;
    }
    if (!this.Dni || this.Dni.length !== 8 || !/^\d+$/.test(this.Dni)) {
      this.errors.Dni = true;
      hasErrors = true;
    }
    if (!this.Nombre.trim()) {
      this.errors.Nombre = true;
      hasErrors = true;
    }
    if (!this.Apellido.trim()) {
      this.errors.Apellido = true;
      hasErrors = true;
    }
    if (!this.Email.trim() || !this.validarEmail(this.Email)) {
      this.errors.Email = true;
      hasErrors = true;
    }
    if (this.Telefono === undefined || (String(this.Telefono).length < 9 || String(this.Telefono).length > 15)) {
      this.errors.Telefono = true;
      hasErrors = true;
    }
    if (hasErrors) {
      this.toastService.error('Por favor corrija los errores en el formulario');
      return;
    } else {
      this.registerService.register(this.Dni, this.Nombre, this.Apellido, this.Email, this.Telefono).subscribe({
        next: () => {
          this.loginService.Login(this.Email, this.Password);
          this.toastService.success('Bienvenido')
          this.router.navigate(['/inicio']);
        },
        error: (err) => {
          console.error('Error Crear cuenta:', err);
          this.toastService.error('Error al registrarse');
        }
      })

    }

  }

  validarEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  resetErrors() {
    this.errors = {
      Dni: false,
      Nombre: false,
      Apellido: false,
      Email: false,
      Telefono: false,
      Password: false,
      ConfirmPassword: false
    };
  }
}
