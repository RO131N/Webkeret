import { Component, OnInit } from '@angular/core';
import { CarcardComponent } from './carcard/carcard.component';
import { Car } from '../../shared/interfaces/car';
import {MatTabsModule} from '@angular/material/tabs';
import { CarFormComponent } from './car-form/car-form.component';

@Component({
  selector: 'app-cars',
  imports: [CarcardComponent,MatTabsModule, CarFormComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss',
})
export class CarsComponent implements OnInit {
  cararray: Array<Car> = [
    
  ];

  ngOnInit(): void {
   if(localStorage.getItem('cars')){
    this.cararray= JSON.parse(localStorage.getItem('cars')!) as Array<Car>
   }
  }
}
