import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  API_BASE_URL: any = "http://studentv.duckdns.org:8888";

  constructor() { }
}
