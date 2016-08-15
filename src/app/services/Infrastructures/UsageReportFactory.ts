import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {IReadOnlyService} from '../ReadOnlyService';
import {USageReportService} from './UsageReportService';
import {IUsageReport} from '../../dtos/infrastructures/UsageReport';

export interface IUsageReportFactory {
    create(vmId: string): IReadOnlyService<IUsageReport>;
}

@Injectable()
export class UsageReportFactory implements IUsageReportFactory {
    private _http: Http;

    constructor(http: Http) {
        this._http = http;
    }
    
    create(vmId: string): IReadOnlyService<IUsageReport> {
        let url: string = `http://192.168.10.106/api/virtualmachines/${vmId}/usagereports/`;

        return new USageReportService(this._http, url);
    }
}