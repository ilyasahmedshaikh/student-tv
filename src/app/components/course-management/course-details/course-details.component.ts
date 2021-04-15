import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  list: any = [];
  teacher: any = [];
  test: any = [];
  tab: any = 1;

  constructor() { }

  ngOnInit(): void {
    this.list = [
      {
        class: 'Class 1'
      },
      {
        class: 'Class 2'
      },
      {
        class: 'Class 3'
      },
      {
        class: 'Class 4'
      }
    ]
    this.test = [
      {
        test: 'Test 1',
        date: '14/4/2021'
      },
      {
        test: 'Test 2',
        date: '10/2/2020'
      },
      {
        test: 'Test 3',
        date: '22/6/2020'
      },
      {
        test: 'Test 4',
        date: '18/9/2028'
      }
    ]
    this.teacher = [
      {
        img: '../../../../assets/img/man.jpg',
        name: 'Yaakov Chaikin',
        education: 'Adjunct Professor, Graduate Computer Science',
      },
      {
        img: '../../../../assets/img/profile.png',
        name: 'Lucas Milano',
        education: 'Assistant Professor, Graduate Computer Science',
      },
      {
        img: '../../../../assets/img/man.jpg',
        name: 'Yaakov Chaikin',
        education: 'Adjunct Professor, Graduate Computer Science',
      },
    ]
  }

  opentab(num: any) {
    this.tab=num;
}

}
