import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
@Component({
  selector: 'app-overview-chart',
  templateUrl: './overview-chart.component.html',
  styleUrls: ['./overview-chart.component.scss']
})
export class OverviewChartComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 86, 27, 90,65, 59, 80, 81, 40 ], label: 'Series B' }
    ]
  };
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };
}
