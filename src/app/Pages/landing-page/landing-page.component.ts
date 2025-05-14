import { Component } from '@angular/core';
import { CarruselComponent } from "../../component/carrusel/carrusel.component";

@Component({
  selector: 'app-landing-page',
  imports: [CarruselComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  isMenuOpen: Boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
