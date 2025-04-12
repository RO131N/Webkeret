import { Component, Input } from '@angular/core';
import { Car } from '../../../shared/interfaces/car';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carcard',
  imports: [MatCardModule, CommonModule],
  templateUrl: './carcard.component.html',
  styleUrl: './carcard.component.scss',
})
export class CarcardComponent {
  @Input() Car!: Car;
  @Input() Index!: number;
  
}
