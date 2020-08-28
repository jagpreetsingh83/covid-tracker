import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineComponent } from './components/line/line.component';
import { BarComponent } from './components/bar/bar.component';
import { ChartComponent } from './components/chart/chart.component';

const COMPONENTS = [LineComponent, BarComponent, ChartComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule],
  exports: [...COMPONENTS]
})
export class ChartModule {}
