import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { CovidHttpService } from '../../../services/covid-http.service';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.scss']
})
export class CountrySelectorComponent implements OnInit {
  countryControl = new FormControl('');

  countries: Observable<string[]> = this.covidHttp.countries();

  @Output() selectedCountry = new EventEmitter<string>();

  constructor(private covidHttp: CovidHttpService) {}

  ngOnInit() {
    this.countryControl.valueChanges.subscribe(country => {
      this.selectedCountry.emit(country);
    });
  }
}
