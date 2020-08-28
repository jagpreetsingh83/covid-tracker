import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { endpointUrls } from '../endpoints';
import { CovidRecord } from '../models';
import { CovidAdapterService } from './covid-adapter.service';

@Injectable({
  providedIn: 'root'
})
export class CovidHttpService {
  constructor(
    private httpClient: HttpClient,
    private adapter: CovidAdapterService
  ) {}

  countryData(country: string): Observable<CovidRecord> {
    console.debug('Fetching data from the server');
    return this.httpClient
      .get<CovidRecord>(endpointUrls.COUNTRY_DATA(country))
      .pipe(
        tap(response => console.debug('Received from server', response)),
        map(response => this.adapter.getCovidRecord(response))
      );
  }

  countries(): Observable<string[]> {
    console.debug('Fetching data from the server');
    return this.httpClient.get<string[]>(endpointUrls.COUNTRY_LIST()).pipe(
      tap(response => console.debug('Received from server', response)),
      map(response => this.adapter.getCountryList(response))
    );
  }
}
