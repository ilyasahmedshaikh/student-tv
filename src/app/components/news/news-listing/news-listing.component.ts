import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-listing',
  templateUrl: './news-listing.component.html',
  styleUrls: ['./news-listing.component.scss']
})
export class NewsListingComponent implements OnInit {

  data: any = [];

  constructor() { }

  ngOnInit(): void {
    this.data = [
      {
        image: '../../../../assets/img/course2.jpg',
        title: 'STARTUPS',
        heading: 'Top startups that are the changing the way we travel',
      },
      {
        image: '../../../../assets/img/course4.jpg',
        title: 'STARTUPS',
        heading: 'Top startups that are the changing the way we travel',
      },
      {
        image: '../../../../assets/img/course6.jpg',
        title: 'STARTUPS',
        heading: 'Top startups that are the changing the way we travel',
      },
      {
        image: '../../../../assets/img/course2.jpg',
        title: 'STARTUPS',
        heading: 'Top startups that are the changing the way we travel',
      },
      {
        image: '../../../../assets/img/course4.jpg',
        title: 'STARTUPS',
        heading: 'Top startups that are the changing the way we travel',
      },
      {
        image: '../../../../assets/img/course6.jpg',
        title: 'STARTUPS',
        heading: 'Top startups that are the changing the way we travel',
      }
    ]
  }

}
