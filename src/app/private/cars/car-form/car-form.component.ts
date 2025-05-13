import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Car } from '../../../shared/interfaces/car';

@Component({
  selector: 'app-car-form',
  imports: [
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './car-form.component.html',
  styleUrl: './car-form.component.scss',
})
export class CarFormComponent {
  @Input() carToEdit?: Car; 
  @Output() carSaved = new EventEmitter<Car>(); 

  public carform = new FormGroup({
    rszam: new FormControl('', [Validators.required]),
    tipus: new FormControl('', [Validators.required]),
    ok: new FormControl('', [Validators.required]),
    model: new FormControl('', [Validators.required]),
    uzemanyag: new FormControl('', [Validators.required]),
    gyartasi_ev: new FormControl('', [Validators.required]),
    teljesitmeny: new FormControl('', [Validators.required]),
    tomeg: new FormControl('', [Validators.required]),
    tulaj: new FormControl('', [Validators.required]),
  });

  addCar() {
    if (this.carform.valid) {
      let helperArray: Array<Car> = [];

      if (localStorage.getItem('cars')) {
        helperArray = JSON.parse(localStorage.getItem('cars')!) as Array<Car>;
      }

      let actualReason: 'Évfordulós biztosítás váltás' | 'Új vagy használt jármű vásárlás' =
        this.carform.get('ok')!.value! as any;

      let actualF: 'benzin' | 'dízel' | 'elektromos' =
        this.carform.get('uzemanyag')!.value! as any;

      const newCar: Car = {
        id: 'valami', 
        rendszam: this.carform.get('rszam')!.value!,
        tipus: this.carform.get('tipus')!.value!,
        ok: actualReason,
        model: this.carform.get('model')!.value!,
        uzemanyag: actualF,
        gyartasi_ev: this.carform.get('gyartasi_ev')!.value!,
        teljesitmeny: this.carform.get('teljesitmeny')!.value!,
        tomeg: this.carform.get('tomeg')!.value!,
        tulaj: this.carform.get('tulaj')!.value!,
      };

      helperArray.push(newCar);
      localStorage.setItem('cars', JSON.stringify(helperArray));

      this.carSaved.emit(newCar); 
      window.location.reload();
    }
  }
}
