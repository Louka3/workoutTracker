import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateName',
  standalone: true,
})
export class TruncateNamePipe implements PipeTransform {
  transform(
    str: string,
    maxLength: number = 16,
    ellipsis: string = '...'
  ): unknown {
    return str.length > maxLength ? str.slice(0, maxLength) + ellipsis : str;
  }
}
