import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {ReadOnlyServiceBase} from '../ReadOnlyService';

import {IHost} from '../../dtos/infrastructures/Host';

@Injectable()
export class HostService extends ReadOnlyServiceBase<IHost> {
    constructor(http: Http) {
        super(http, 'http://192.168.10.106/api/hosts/');        
    }    
}
