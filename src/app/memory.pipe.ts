import { Pipe, PipeTransform } from '@angular/core';

import {IMemory} from './dtos/infrastructures/Memory';
import {MemoryUnits} from './dtos/infrastructures/MemoryUnits';

@Pipe({
  name: 'memory'
})
export class MemoryPipe implements PipeTransform {

  transform(memory: IMemory): string {
    return `${memory.value} ${MemoryUnits[memory.unit]}`;
  }

}
