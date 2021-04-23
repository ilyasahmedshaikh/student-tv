import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginService {

  constructor() { }

  setData(data: any) {
    localStorage.setItem('user', JSON.stringify(data));
  }

  getData() {
    let data: any = localStorage.getItem('user');
    return JSON.parse(data);
  }

}
