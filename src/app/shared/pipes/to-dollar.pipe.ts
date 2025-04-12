import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toDollar'
})
export class ToDollarPipe implements PipeTransform {

  private exchangeRate = 350;

  transform(value: number): string {
    if (typeof value !== 'number') return '';
    const dollar = value / this.exchangeRate;
    return dollar.toFixed(2) + ' $';
  }

}
