export type CaseType = 'Infected' | 'Recovered' | 'Deaths';

export interface CardItem {
  type: CaseType;
  count: number;
  date: Date;
  message: string;
}

export class CovidRecord {
  constructor(
    public confirmed: number,
    public recovered: number,
    public deaths: number,
    public lastUpdate: Date
  ) {}
}

export interface Adapter<T> {
  adapt(item: any): T;
}
