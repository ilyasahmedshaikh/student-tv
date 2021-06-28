import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/http/config/config.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  endpoint: any = this.config.API_BASE_URL + '/course/view';

  list: any = [];
  teacher: any = [];
  test: any = [];
  tab: any = 1;

  data: any = {};
  course: any = {};

  constructor(
    private router: Router,
    private http: HttpClient,
    private config: ConfigService,
  ) {
    this.data = this.router.getCurrentNavigation()?.extras?.state?.data;
  }

  ngOnInit(): void {
    if (this.data) {
      this.getCourse();
    } else {
      this.router.navigateByUrl('/course-management/course-listing')
    }
    
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
    this.tab = num;
  }

  getCourse() {
    this.http.get(`${this.endpoint}/${this.data.id}`).subscribe(res => {
      this.course = res;

      console.log(this.course);
      
    })
  }

}
