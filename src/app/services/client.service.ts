import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }
  pubClient = () => axios.create({
    baseURL: environment.baseURL,
    headers: {
      'content-type': 'application/json',
    },
  });
}
