import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-listing',
  templateUrl: './chat-listing.component.html',
  styleUrls: ['./chat-listing.component.scss']
})
export class ChatListingComponent implements OnInit {

  data: any = [];

  constructor() { }

  ngOnInit(): void {
    this.data = [
      {
        image: '../../../../assets/img/man.jpg',
        name: 'Jacy Semth',
        time: '03:40pm',
        message: 'placeholder text commonly used to demonstrate the visual form of a document.'
      },
      {
        image: '../../../../assets/img/profile.png',
        name: 'John Adom',
        time: 'March, 02, 2020',
        message: 'In publishing and graphic design, Lorem ipsum is a placeholder.'
      },
      {
        image: '../../../../assets/img/man.jpg',
        name: 'Alex John',
        time: 'August, 10, 2017',
        message: 'placeholder text commonly used to demonstrate the visual form of a document.'
      },
      {
        image: '../../../../assets/img/profile.png',
        name: 'Jacy Adom',
        time: '05:10pm',
        message: 'In publishing and graphic design, Lorem ipsum is a placeholder.'
      },
      {
        image: '../../../../assets/img/man.jpg',
        name: 'Radu Roy',
        time: 'April, 22, 2017',
        message: 'placeholder text commonly used to demonstrate the visual form of a document.'
      }
    ]
  }

}
