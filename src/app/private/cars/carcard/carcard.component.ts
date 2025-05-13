import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../../shared/interfaces/car';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carcard',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './carcard.component.html',
  styleUrl: './carcard.component.scss',
})
export class CarcardComponent {
  @Input() car!: Car;       // ⬅️ kis kezdőbetű
  @Input() index!: number;  // ⬅️ kis kezdőbetű

  @Output() deleteCar = new EventEmitter<string>();

  onDelete() {
    this.deleteCar.emit(this.car.id);  // ⬅️ kis kezdőbetű
  }
}
