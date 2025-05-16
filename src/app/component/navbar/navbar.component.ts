import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CircleUserRound, LucideAngularModule} from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  nombre = 'Nombre';
  apellido = 'Apellido';

  userIcon = CircleUserRound;
  
  constructor(private router: Router) {}

  isPerfilRoute(): boolean {
    return this.router.url === '/perfil' || this.router.url.startsWith('/perfil/');
}
}
