import {States} from './States';
import {IMemory} from './Memory';

export interface IVirtualMachine {
    virtualMachineId: number;
    hostId: number;
    name: string;
    state: States;
    virtualProcessorCount: number;
    virtualMemory: IMemory;
}

