import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './components/chart/chart.component';

const COMPONENTS = [ChartComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, ChartsModule],
  exports: [...COMPONENTS]
})
export class ChartModule {}
