import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CovidHttpService } from '../../../services/covid-http.service';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.scss']
})
export class CountrySelectorComponent {
  countries: Observable<string[]> = this.covidHttp.countries();

  constructor(private covidHttp: CovidHttpService) {}
}
