import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  API_BASE_URL: any = "http://studentv.duckdns.org:8888";

  constructor() { }

  getToken() {
    let token = localStorage.getItem('token');
    return token;
  }

  setToken(token: any) {
    localStorage.setItem('token', token);
  }

}
