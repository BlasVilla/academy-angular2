import { Pipe, PipeTransform } from '@angular/core';

import {States} from './dtos/infrastructures/States';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {

  transform(value: States): string {
    return States[value];
  }

}
