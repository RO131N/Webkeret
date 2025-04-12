import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Car } from '../../shared/interfaces/car';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ToDollarPipe } from '../../shared/pipes/to-dollar.pipe';
import { ToEuroPipe } from '../../shared/pipes/to-euro.pipe';

@Component({
  selector: 'app-calculator',
  imports: [
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    ToDollarPipe,
    ToEuroPipe,
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent implements OnInit {
  carArray!: Array<Car>;
  random = Math.floor(Math.random() * 1000000);
  actualIndex = new FormControl('',[Validators.required]);
  display = false;
  currency: 'ft' | 'euro' | 'dollar' = 'ft';
  ngOnInit(): void {
    if (localStorage.getItem('cars')) {
      this.carArray = JSON.parse(localStorage.getItem('cars')!) as Array<Car>;
    }
    console.log(this.carArray);
    console.log(this.random)
  }

  calculate() {
    if(this.actualIndex.valid){
    this.display = true;
    }
  }
}
