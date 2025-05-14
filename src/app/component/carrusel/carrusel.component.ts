import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  imports: [CommonModule],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {
  @Input() imagePaths: string[] = [];
  currentIndex = 0;
  visibleImages: string[] = [];
  isMobile = false;
  itemsToShow = 3;

  ngOnInit(): void {
    this.updateVisibleImages();
  }

   @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
    this.updateVisibleImages();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
    this.itemsToShow = this.isMobile ? 1 : 3;
  }

  updateVisibleImages(): void {
    this.visibleImages = [];
    for (let i = 0; i < 3; i++) {
      const index = (this.currentIndex + i) % this.imagePaths.length;
      this.visibleImages.push(this.imagePaths[index]);
    }
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.imagePaths.length;
    this.updateVisibleImages();
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.imagePaths.length) % this.imagePaths.length;
    this.updateVisibleImages();
  }
    goTo(index: number): void {
    this.currentIndex = index;
    this.updateVisibleImages();
  }
}