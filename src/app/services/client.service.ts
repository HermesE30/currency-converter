import { Injectable } from '@angular/core';
import axios from 'axios';
// environment
import { environment } from 'src/environments/environment';

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
