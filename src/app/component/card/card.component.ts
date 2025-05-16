import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Clases } from '../../interfaces/clases';
import { CommonModule } from '@angular/common';
import { Reserva } from '../../interfaces/reserva';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() data: Clases[] | Reserva[] = []

  @Input() nroClase: number = 0
  @Input() nombreClase?: string
  @Input() fecha?: string
  @Input()  hora?: string
  @Input()  capacidad?: number
  @Input() inscriptos?: number
  @Input() nombreEntrenador?: string
  @Input()  nombreSucursal?: string
  @Input()  nroReserva?: number










  @Input() button?: string;
  @Output() HanleButton = new EventEmitter<number>();

  getClases(): Clases[] {
  if (this.data.length === 0) return [];
  
  if ('nroReserva' in this.data[0]) {
    return (this.data as Reserva[]).map(reserva => reserva.clase);
  } 
  else {
    return this.data as Clases[];
  }
}
getItems(): any[] {
    return this.data;
  }
  
  isReserva(item: any): item is Reserva {
    return 'nroReserva' in item;
  }

  OnHandleButton() {
    const res = this.nroReserva != null ? this.nroReserva : this.nroClase;
    this.HanleButton.emit(res)
  }
}