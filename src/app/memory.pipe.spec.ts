/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { MemoryPipe } from './memory.pipe';

describe('Pipe: Memory', () => {
  it('create an instance', () => {
    let pipe = new MemoryPipe();
    expect(pipe).toBeTruthy();
  });
});
