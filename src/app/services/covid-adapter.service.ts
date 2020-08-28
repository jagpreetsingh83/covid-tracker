import { Injectable } from '@angular/core';
import { Adapter, CovidRecord } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CovidRecordAdapter implements Adapter<CovidRecord> {
  adapt({ confirmed, recovered, deaths, lastUpdate }): CovidRecord {
    return new CovidRecord(
      confirmed.value,
      recovered.value,
      deaths.value,
      lastUpdate
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class CovidAdapterService {
  constructor(private recordAdapter: CovidRecordAdapter) {}

  public getCovidRecord(data: any): CovidRecord {
    return this.recordAdapter.adapt(data);
  }
}
