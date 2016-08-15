import {Http} from '@angular/http';

import {ReadOnlyServiceBase} from '../ReadOnlyService';

import {IUsageReport, UsageReport} from '../../dtos/infrastructures/UsageReport';

export class USageReportService extends ReadOnlyServiceBase<IUsageReport> {
    constructor(http: Http, baseUrl: string) {
        super(http, baseUrl);        
    }

    protected mapItem(data: any): IUsageReport {
        return new UsageReport(data);
    }
}