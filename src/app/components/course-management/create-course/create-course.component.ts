import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/http/config/config.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  programForm: any = FormGroup;
  endpoint: any = this.config.API_BASE_URL + '/course/create';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.programForm = this.fb.group({
      status: ['', Validators.required],
      approval: ['', Validators.required],
      code: ['', Validators.required],
      date: ['', Validators.required],
      createdBy: ['', Validators.required],
      description: ['', Validators.required],
      githubLink: ['', Validators.required],
      level: ['', Validators.required],
      link: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  createRegister() {
    let data = {
      "id": 0,
      'status': this.programForm.value.status,
      'approval': this.programForm.value.approval,
      'code': this.programForm.value.code,
      'createdDate': new Date(this.programForm.value.date),
      'createdBy': this.programForm.value.createdBy,
      'description': this.programForm.value.description,
      'githubLink': this.programForm.value.githubLink,
      'level': this.programForm.value.level,
      'link': this.programForm.value.link,
      'name': this.programForm.value.name,
      'price': this.programForm.value.price,
    };

    this.http.post(this.endpoint, data).subscribe((res: any) => {
      if (res) {
        console.log(res);
        this.router.navigateByUrl('/course-management/course-listing');
      }
    },
    (error) => {
      alert(error.message);
    })
  }

}
