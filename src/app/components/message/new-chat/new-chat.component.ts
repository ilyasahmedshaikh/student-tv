import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.scss']
})
export class NewChatComponent implements OnInit {

  data: any = [];

  constructor() { }

  ngOnInit(): void {
    this.data = [
      {
        image: '../../../../assets/img/man.jpg',
        name: 'Oliver',
        available: 'Available'
      },
      {
        image: '../../../../assets/img/profile.png',
        name: 'William',
        available: 'Available'
      },
      {
        image: '../../../../assets/img/man.jpg',
        name: 'James',
        available: 'Offline'
      },
      {
        image: '../../../../assets/img/profile.png',
        name: 'Lucas',
        available: 'Available'
      },
      {
        image: '../../../../assets/img/man.jpg',
        name: 'Mason',
        available: 'Offline'
      },
      {
        image: '../../../../assets/img/profile.png',
        name: 'Ethan',
        available: 'Available'
      },
      {
        image: '../../../../assets/img/man.jpg',
        name: 'Alexander',
        available: 'Offline'
      },
      {
        image: '../../../../assets/img/profile.png',
        name: 'Logan',
        available: 'Available'
      },
      {
        image: '../../../../assets/img/man.jpg',
        name: 'Jackson',
        available: 'Offline'
      }
    ]
  }

}
