import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective, Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnChanges {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  @Input() barChartData: ChartDataSets[];
  @Input() country: string;

  barChartOptions: ChartOptions = {
    responsive: true
  };
  barChartLabels: Label[] = [''];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartColors: Color[] = [
    { backgroundColor: 'rgba(0, 0, 255, 0.5)' },
    { backgroundColor: 'rgba(0, 255, 0, 0.5)' },
    { backgroundColor: 'rgba(255, 0, 0, 0.5)' }
  ];

  /** Fix for Chart label update issue */
  ngOnChanges() {
    this.barChartLabels.length = 0;
    this.barChartLabels.push(
      this.country ? `Current state in ${this.country}` : ''
    );
  }
}
