import { Component, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  @Input() barChartData: ChartDataSets[];
  @Input() country: string;

  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: Label[] = ['2006'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  get title() {
    return this.country ? `Current state in ${this.country}` : '';
  }

  colorScheme = {
    domain: [
      'rgba(0, 0, 255, 0.5)',
      'rgba(0, 255, 0, 0.5)',
      'rgba(255, 0, 0, 0.5)'
    ]
  };
}
