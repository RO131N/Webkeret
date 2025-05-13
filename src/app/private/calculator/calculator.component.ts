import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Car } from '../../shared/interfaces/car';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ToDollarPipe } from '../../shared/pipes/to-dollar.pipe';
import { ToEuroPipe } from '../../shared/pipes/to-euro.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ToDollarPipe,
    ToEuroPipe,
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent implements OnInit, OnDestroy {
  carArray: Car[] = [];
  random = Math.floor(Math.random() * 1000000);
  actualIndex = new FormControl('', [Validators.required]);
  display = false;
  currency: 'ft' | 'euro' | 'dollar' = 'ft';

  public calculatorform = new FormGroup({
    nev: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    telefonszam: new FormControl('', [Validators.required]),
    haszn: new FormControl('', [Validators.required]),
  });

  private resizeHandler = () => {
    console.log('Window resized');
  };

  ngOnInit(): void {
    const stored = localStorage.getItem('cars');
    if (stored) {
      this.carArray = JSON.parse(stored) as Car[];
    }
    window.addEventListener('resize', this.resizeHandler);
    console.log(this.carArray);
    console.log(this.random);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeHandler);
    console.log('CalculatorComponent destroyed');
  }

  calculate(): void {
    if (this.actualIndex.valid) {
      this.display = true;
    }
  }
}
