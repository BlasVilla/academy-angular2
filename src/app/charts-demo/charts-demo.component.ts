import { Component, OnInit } from '@angular/core';

import {ChartDemoComponent} from '../chart-demo/chart-demo.component';
import {BarChartComponent} from '../bar-chart/bar-chart.component';

@Component({
  moduleId: module.id,
  selector: 'app-charts-demo',
  templateUrl: 'charts-demo.component.html',
  styleUrls: ['charts-demo.component.css'],
  directives: [ChartDemoComponent, BarChartComponent]
})
export class ChartsDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
