import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/auth/login.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  Email: string = '';
  Password: string = '';
  error: boolean = false
  constructor(private router: Router, private toastService: ToastrService, private loginService: LoginService) { }

  HandleSumbit() {
    this.error = false
    if (this.Email.toString().trim() === '' || this.Password.toString().trim() === '') {
      this.error = true
      return;
    }
    this.loginService.Login(this.Email, this.Password).subscribe({
      next: () => {
        this.toastService.success('Bienvenido')
        this.router.navigate(['/inicio']);
      },
      error: (error) => {
        this.toastService.error('Error al iniciar session')
        console.log(error)
      }
    })


  }
}
