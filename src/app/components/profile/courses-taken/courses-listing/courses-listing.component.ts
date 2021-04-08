import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-listing',
  templateUrl: './courses-listing.component.html',
  styleUrls: ['./courses-listing.component.scss']
})
export class CoursesListingComponent implements OnInit {

  data: any = [];

  constructor() { }

  ngOnInit() {
    this.data=[
      {
        image: '../../../../assets/img/course4.jpg',
        title: 'App Development',
        subTitle: 'Horizon Institute',
        lecture: '22 Lectures',
        time: '04 hours',
        level: 'Beginner Level',
      },
      {
        image: '../../../../assets/img/course3.jpg',
        title: 'Machine Learning',
        subTitle: 'Highgate Academy',
        lecture: '19 Lectures',
        time: '03 hours',
        level: 'Experienced Level',
      },
      {
        image: '../../../../assets/img/course2.jpg',
        title: 'Python Language',
        subTitle: 'Oak University',
        lecture: '15 Lectures',
        time: '02 hours',
        level: 'Beginner Level',
      },
      {
        image: '../../../../assets/img/course1.jpg',
        title: 'Hacking Course',
        subTitle: 'Seacoast School',
        lecture: '10 Lectures',
        time: '04 hours',
        level: 'Experienced Level',
      },
      {
        image: '../../../../assets/img/course5.jpg',
        title: 'Graphic Design',
        subTitle: 'Landslide College',
        lecture: '18 Lectures',
        time: '05 hours',
        level: 'Beginner Level',
      },
      {
        image: '../../../../assets/img/course6.jpg',
        title: 'Cyber Security',
        subTitle: 'Horizon University',
        lecture: '25 Lectures',
        time: '03 hours',
        level: 'Experienced Level',
      },
      {
        image: '../../../../assets/img/course7.jpg',
        title: 'Microsoft Excel',
        subTitle: 'HighImpact Institute',
        lecture: '16 Lectures',
        time: '06 hours',
        level: 'Beginner Level',
      }
    ]
  }

}
