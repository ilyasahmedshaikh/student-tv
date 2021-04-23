import { Component, OnInit } from '@angular/core';
import{ BackNavigateService } from '../../../core/services/back-navigate/back-navigate.service';

@Component({
  selector: 'app-news-listing',
  templateUrl: './news-listing.component.html',
  styleUrls: ['./news-listing.component.scss']
})
export class NewsListingComponent implements OnInit {

  data: any = [];

  constructor(
    private backNavigateService: BackNavigateService,
  ) { }

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

  toggleBack(state?: any) {
    this.backNavigateService.toggleBackState(state);
  }

}
