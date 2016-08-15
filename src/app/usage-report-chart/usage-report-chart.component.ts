import { Component, OnInit } from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {Observable} from 'rxjs/Observable';

import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

import {IUsageReportFactory, UsageReportFactory} from '../services/infrastructures/UsageReportFactory';

import {IUsageReport} from '../dtos/infrastructures/UsageReport';

@Component({
  moduleId: module.id,
  selector: 'usage-report-chart',
  templateUrl: 'usage-report-chart.component.html',
  styleUrls: ['usage-report-chart.component.css'],
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES],
  inputs: ['vmId']
})
export class UsageReportChartComponent implements OnInit {
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    animation: false,
    responsive: true
  };
  public lineChartColours:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];

  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  // --------

  private _factory: IUsageReportFactory;

  public vmId: string;

  private _usageReports$: Observable<IUsageReport[]>;
  public usageReports$():  Observable<IUsageReport[]> {
    return this._usageReports$;
  }

  private _usageReportsMappedData: any[];
  public get usageReportsMappedData(): any[] {
    return this._usageReportsMappedData;
  }

  private _usageReportsMappedData$: Observable<any[]>;
  public get usageReportsMappedData$(): Observable<any[]> {
    return this._usageReportsMappedData$;
  }

  private _usageReportsLabels: any[];
  public get usageReportsLabels(): any[] {
    return this._usageReportsLabels;
  }

  private _usageReportsLabels$: Observable<any[]>;
  public get usageReportsLabels$(): Observable<any[]> {
    return this._usageReportsLabels$;
  }

  constructor(factory: UsageReportFactory) {
    this._factory = factory;    
  }

  ngOnInit(): void {

  }

  private retrieveUsageReports(): void {
    let service = this._factory.create(this.vmId);

    this._usageReports$ = service.getAllItems().share();

    this._usageReports$.subscribe(ur => console.log("UR got in"));

    this._usageReportsMappedData$ = this._usageReports$.map(ur => 
    [
      {data: ur.map(u => u.memoryUsage), label: 'memory usage'}, 
      {data: ur.map(u => u.processorUsage), label: 'processor usage'}
      ]);

    this._usageReportsLabels$ = this._usageReports$.map(ur => 
      ur.map(u => u.timeStamp));

  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
