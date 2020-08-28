import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardsModule } from './cards/cards.module';
import { ChartModule } from './chart/chart.module';
import { CountrySelectorModule } from './country-picker/country-selector.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CardsModule, CountrySelectorModule, ChartModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
