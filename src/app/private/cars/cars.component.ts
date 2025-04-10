import { Component } from '@angular/core';
import { CarcardComponent } from './carcard/carcard.component';
import { Car } from '../../shared/interfaces/car';

@Component({
  selector: 'app-cars',
  imports: [CarcardComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss',
})
export class CarsComponent {
  cararray: Array<Car> = [
    {
      id: '1',
      rendszam: 'ASD-111',
      tipus: 'Tesla',
      ok: 'Évfordulós biztosítás váltás',
      model: 'Model Y',
      uzemanyag: 'elektromos',
      gyartasi_ev: '2010',
      teljesitmeny: '70kw',
      tomeg: '2000kg',
      tulaj: 'Én',
    },
    {
      id: '1',
      rendszam: 'ASD-111',
      tipus: 'Tesla',
      ok: 'Évfordulós biztosítás váltás',
      model: 'Model Y',
      uzemanyag: 'elektromos',
      gyartasi_ev: '2010',
      teljesitmeny: '70kw',
      tomeg: '2000kg',
      tulaj: 'Én',
    },
    {
      id: '1',
      rendszam: 'ASD-111',
      tipus: 'Tesla',
      ok: 'Évfordulós biztosítás váltás',
      model: 'Model Y',
      uzemanyag: 'elektromos',
      gyartasi_ev: '2010',
      teljesitmeny: '70kw',
      tomeg: '2000kg',
      tulaj: 'Én',
    },
    {
      id: '1',
      rendszam: 'ASD-111',
      tipus: 'Tesla',
      ok: 'Évfordulós biztosítás váltás',
      model: 'Model Y',
      uzemanyag: 'elektromos',
      gyartasi_ev: '2010',
      teljesitmeny: '70kw',
      tomeg: '2000kg',
      tulaj: 'Én',
    },
    {
      id: '1',
      rendszam: 'ASD-111',
      tipus: 'Tesla',
      ok: 'Évfordulós biztosítás váltás',
      model: 'Model Y',
      uzemanyag: 'elektromos',
      gyartasi_ev: '2010',
      teljesitmeny: '70kw',
      tomeg: '2000kg',
      tulaj: 'Én',
    },
  ];
}
