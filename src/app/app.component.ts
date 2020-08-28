import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { CardItem, CovidRecord } from './models';
import { CovidHttpService } from './services/covid-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cardsData: CardItem[];
  chartsData: ChartDataSets[];
  country: string;

  constructor(private covidHttp: CovidHttpService) {}

  ngOnInit() {
    this.loadCountryData();
  }

  private loadCountryData(country: string = '') {
    this.country = country;
    this.covidHttp.countryData(country).subscribe((data: CovidRecord) => {
      this.setupCardsData(data);
      this.setupChartsData(data);
    });
  }

  private setupCardsData(data: CovidRecord) {
    this.cardsData = [
      {
        type: 'Infected',
        count: data.confirmed,
        date: data.lastUpdate,
        message: 'Number of active cases from COVID-19.'
      },
      {
        type: 'Recovered',
        count: data.recovered,
        date: data.lastUpdate,
        message: 'Number of recoveries from COVID-19.'
      },
      {
        type: 'Deaths',
        count: data.deaths,
        date: data.lastUpdate,
        message: 'Number of deaths caused by COVID-19.'
      }
    ];
  }

  private setupChartsData(data: CovidRecord) {
    this.chartsData = [
      { data: [data.confirmed], label: 'Infected' },
      { data: [data.recovered], label: 'Recovered' },
      { data: [data.deaths], label: 'Deaths' }
    ];
  }

  onCountryChange(country: string) {
    this.loadCountryData(country);
  }
}
