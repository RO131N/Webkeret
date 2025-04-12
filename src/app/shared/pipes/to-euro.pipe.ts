import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toEuro'
})
export class ToEuroPipe implements PipeTransform {

  private exchangeRate = 380;

  transform(value: number): string {
    if (typeof value !== 'number') return '';
    const euro = value / this.exchangeRate;
    return euro.toFixed(2) + ' €';
  }

}
