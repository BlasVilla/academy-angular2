import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {ReadOnlyServiceBase} from '../ReadOnlyService';

import {ICluster} from '../../dtos/infrastructures/Cluster';

@Injectable()
export class ClusterService extends ReadOnlyServiceBase<ICluster> {
    constructor(http: Http) {
        super(http, 'http://192.168.10.106/api/clusters/');        
    }    
}