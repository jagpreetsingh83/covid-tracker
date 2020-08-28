import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CountUpModule } from 'ngx-countup';
import { CardComponent } from './components/card/card.component';
import { CardsComponent } from './components/cards/cards.component';

const COMPONENTS = [CardsComponent, CardComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, CountUpModule],
  exports: [...COMPONENTS]
})
export class CardsModule {}
