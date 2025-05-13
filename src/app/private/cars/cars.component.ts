import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';

import { CarService } from '../../shared/services/car.service';
import { Car } from '../../shared/interfaces/car';

import { CarcardComponent } from './carcard/carcard.component';
import { CarFormComponent } from './car-form/car-form.component';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    CarcardComponent,
    CarFormComponent
  ],
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  filteredCars: Car[] = [];  // ✅ helyesen deklarált

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.loadFilteredCars();
  }

  loadFilteredCars(): void {
    this.carService.getFilteredCars('Toyota').subscribe((cars: Car[]) => {
      this.filteredCars = cars;
    });
  }
}
