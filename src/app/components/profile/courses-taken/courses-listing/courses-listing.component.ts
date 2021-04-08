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
        subTitle: 'Eduonix Learning Solutions',
        lecture: '22 lectures,',
        time: '4 hours video -',
        level: 'Beginner Level',
      },
      {
        image: '../../../../assets/img/course3.jpg',
        title: 'Machine Learning',
        subTitle: 'Tech Knowledge',
        lecture: '19 lectures,',
        time: '3 hours video -',
        level: 'All Level',
      },
      {
        image: '../../../../assets/img/course2.jpg',
        title: 'Python Bootcamp',
        subTitle: 'QScutter Tutorials',
        lecture: '15 lectures,',
        time: '2 hours video -',
        level: 'Beginner Level',
      },
      {
        image: '../../../../assets/img/course1.jpg',
        title: 'Ethical Hacking',
        subTitle: 'Omninox Solutions',
        lecture: '10 lectures,',
        time: '4 hours video -',
        level: 'All Level',
      },
      {
        image: '../../../../assets/img/course5.jpg',
        title: 'Graphic Design',
        subTitle: 'Tech Solutions',
        lecture: '18 lectures,',
        time: '5 hours video -',
        level: 'Beginner Level',
      },
      {
        image: '../../../../assets/img/course6.jpg',
        title: 'Cyber Security',
        subTitle: 'Starweaver Team',
        lecture: '25 lectures,',
        time: '3 hours video -',
        level: 'All Level',
      },
      {
        image: '../../../../assets/img/course7.jpg',
        title: 'Microsoft Excel',
        subTitle: 'Start Tech',
        lecture: '16 lectures,',
        time: '6 hours video -',
        level: 'Beginner Level',
      }
    ]
  }

}
