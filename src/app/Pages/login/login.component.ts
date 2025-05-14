import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class IniciarComponent {
  dni?: string;
  error: boolean = false
  constructor(private router: Router, private toastService: ToastrService) { }

  HandleDni() {
    this.error = false
    if (!this.dni || this.dni.toString().trim() === '') {
      this.error = true
      return;
    }

    localStorage.setItem('Dni', this.dni);
    this.toastService.success('Bienvenido')
    this.router.navigate(['/inicio']);

  }
}
