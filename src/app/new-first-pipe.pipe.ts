import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newFirstPipe'
})
export class NewFirstPipePipe implements PipeTransform {
  public transform(value: number, lacale: string): string {
    return value.toLocaleString(lacale);
  }
}
