import { Component, OnInit } from '@angular/core';
import{ BackNavigateService } from '../../../core/services/back-navigate/back-navigate.service';
import { PresentationalService } from '../../../core/services/presentational/presentational.service';

@Component({
  selector: 'app-courses-listing',
  templateUrl: './courses-listing.component.html',
  styleUrls: ['./courses-listing.component.scss']
})
export class CoursesListingComponent implements OnInit {

  data: any = [];

  constructor(
    private backNavigateService: BackNavigateService,
    private presentationalS: PresentationalService
  ) { }

  ngOnInit(): void {
    this.presentationalS.setPresentation('header', true);
    this.presentationalS.setPresentation('bottomBar', true);

    this.data = [
      {
        image: '../../../../assets/img/course4.jpg',
        title: 'App Development',
        teacher: 'Yaakov Chaikin',
        lecture: '02 Lectures',
        time: '03 hours',
        students: '231 Students',
      },
      {
        image: '../../../../assets/img/course3.jpg',
        title: 'Machine Learning',
        teacher: 'Sachin Patel',
        lecture: '19 Lectures',
        time: '03 hours',
        students: '658 Students',
      },
      {
        image: '../../../../assets/img/course2.jpg',
        title: 'Python Language',
        teacher: 'Chaikin Aly',
        lecture: '15 Lectures',
        time: '02 hours',
        students: '305 Students',
      },
      {
        image: '../../../../assets/img/course1.jpg',
        title: 'Hacking Course',
        teacher: 'Lucas Milano',
        lecture: '10 Lectures',
        time: '04 hours',
        students: '256 Students',
      },
      {
        image: '../../../../assets/img/course5.jpg',
        title: 'Graphic Design',
        teacher: 'Giovani',
        lecture: '18 Lectures',
        time: '05 hours',
        students: '199 Students',
      },
      {
        image: '../../../../assets/img/course6.jpg',
        title: 'Cyber Security',
        teacher: 'Yarsir Ahmed',
        lecture: '25 Lectures',
        time: '03 hours',
        students: '352 Students',
      },
      {
        image: '../../../../assets/img/course7.jpg',
        title: 'Microsoft Excel',
        teacher: 'Allexendra',
        lecture: '16 Lectures',
        time: '06 hours',
        students: '100 Students',
      }
    ]
  }

  toggleBack(state?: any) {
    this.backNavigateService.toggleBackState(state);
  }

}
