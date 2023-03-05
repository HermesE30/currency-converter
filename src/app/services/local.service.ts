import { Injectable } from '@angular/core';
import { CardComponentProps } from '../components/card/types';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  saveData(key: string, value: CardComponentProps[]) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getData(key: string) {
    const storeData = localStorage.getItem(key);
    if (storeData) return JSON.parse(storeData)
    return {};
  }

  removeData(key: string) {
    localStorage.removeItem(key);
  }

  clearData() {
    localStorage.clear();
  }
}
