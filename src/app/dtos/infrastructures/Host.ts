import {States} from './States';
import {IMemory} from './Memory';

export interface IHost {
    hostId: number;
    clusterId: number;
    name: string;
    state: States;
    processorCount: number;
    physicalMemory: IMemory;
    virtualMachineIds: number[];
}
