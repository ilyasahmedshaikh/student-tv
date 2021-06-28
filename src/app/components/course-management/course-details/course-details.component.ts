import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/http/config/config.service';
import { CheckLoginService } from '../../../core/services/checkLogin/check-login.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  endpoint: any = this.config.API_BASE_URL + '/course/view';
  commentEndpoint: any = this.config.API_BASE_URL + '/comments/create';
  getCommentsEndpoint: any = this.config.API_BASE_URL + '/comments/getAllByCourseId';

  commentForm: any = FormGroup;

  list: any = [];
  teacher: any = [];
  test: any = [];
  tab: any = 1;

  userData: any = {};

  data: any = {};
  course: any = {};
  comments: any = [];

  today: any = new Date();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private config: ConfigService,
    private loginService: CheckLoginService
  ) {
    this.data = this.router.getCurrentNavigation()?.extras?.state?.data;
  }

  ngOnInit(): void {
    this.formInit();

    if (this.data) {
      this.getCourse();
      this.getCommentsByCourse();
    }
    else {
      this.router.navigateByUrl('/course-management/course-listing');
    }

    this.userData = this.loginService.getData();
    
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

  formInit() {
    this.commentForm = this.fb.group({
      comment: ["", Validators.required],
      createdDate: [this.today, Validators.required],
      status: ["true", Validators.required],
    });
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

  writeComment() {
    let data = {
      ...this.commentForm.value,
      courseDTO: { id: parseInt(this.data.id) },
      userDTO: { id: parseInt(this.userData.userId) },
    }

    this.http.post(this.commentEndpoint, data).subscribe((res: any) => {
      if (res) {
        this.getCommentsByCourse();
      }
    },
    (error) => {
      alert(error.message);
    })
  }

  getCommentsByCourse() {
    this.http.get(`${this.getCommentsEndpoint}/${this.data.id}`).subscribe(res => {
      this.comments = res;
    })
  }

}
