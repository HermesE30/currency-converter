import { Injectable } from '@angular/core';
import { Currency } from '../interfaces/currency';
import { ClientService } from './client.service';
import { LocalService } from './local.service';
import { CardComponentProps } from '../components/card/types';
import * as moment from 'moment';

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

  last(currencies: string[]): Promise<CardComponentProps[]> {
    if (this.isStoreEmpty(this.store.getData(this.storeKey))) {
      console.log('whithout cache');
      // create paath
      const curr: string = currencies.join(',');
      const path = `/${curr}`;
      // create get request
      return new Promise((resolve, reject) => {
        // create a client for private routes
        const client = this.clientService.pubClient();
        // request
        client.get(path).then((resp) => {
          const { data } = resp;
          resolve(this.adaptData(data));
        }).catch((e) => reject(e));
      });
    }

    console.log('whith cache');
    return new Promise((resolve, reject) => {
      const data = this.store.getData(this.storeKey);
      if (data) resolve(data);
      reject()
    });

  }

  adaptData(obj: CurrencyProps): CardComponentProps[] {
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
