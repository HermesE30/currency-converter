import { Injectable } from '@angular/core';
import * as moment from 'moment';
// interface
import { Currency } from '../interfaces/currency';
// components
import { CardComponentProps } from '../components/card/types';
// service
import { ClientService } from './client.service';
import { LocalService } from './local.service';

export type CurrencyProps = { [key: string]: Currency }

@Injectable({
  providedIn: 'root'
})


export class CurrencyService {

  private storeKey = 'last'

  constructor(
    private clientService: ClientService,
    private store: LocalService,
    ) { }

  isStoreEmpty(storeData: CurrencyProps): boolean {
    return Object.keys(storeData).length === 0;
  }

  lastOccurrence(currencies: string[]): Promise<CardComponentProps[]> {
    if (this.isStoreEmpty(this.store.getData(this.storeKey))) {
      // 
      const curr: string = currencies.join(',');
      // create paath
      const path = `/${curr}`;
      // create get request
      return new Promise((resolve, reject) => {
        // create a client for private routes
        const client = this.clientService.pubClient();
        // request
        client.get(path).then((resp) => {
          const { data } = resp;
          resolve(this.dataAdapter(data));
        }).catch((e) => reject(e));
      });
    }

    return new Promise((resolve, reject) => {
      const data = this.store.getData(this.storeKey);
      if (data) resolve(data);
      reject()
    });

  }

  dataAdapter(obj: CurrencyProps): CardComponentProps[] {
    const newData: CardComponentProps[] = this.objectToArray(obj).map((c) => ({
      title: c.name.split('/')[0],
      currency: c.low,
      variation: c.pctChange,
      updateTime: moment().format('HH:mm:ss'),
    }));
    this.store.saveData(this.storeKey, newData);
    return newData;
  }


  objectToArray(obj: CurrencyProps): Currency[] {
    const result: Currency[] = [];
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        result.push(obj[key]);
      }
    }
    return result;
  }

}
