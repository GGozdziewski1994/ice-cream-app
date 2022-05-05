import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: string[]) {
    const valueToNumber = value.map((val) => +val);
    return valueToNumber.sort((a, b) => a - b);
  }
}
