import { Component, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  @Input() barChartData: ChartDataSets[];
  @Input() country: string;

  barChartOptions: ChartOptions = {
    responsive: true
  };
  barChartLabels: Label[] = ['Globally'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartColors: Color[] = [
    { backgroundColor: 'rgba(0, 0, 255, 0.5)' },
    { backgroundColor: 'rgba(0, 255, 0, 0.5)' },
    { backgroundColor: 'rgba(255, 0, 0, 0.5)' }
  ];
}
