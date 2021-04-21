import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  programForm: any = FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.programForm = this.fb.group({
      active: ['', Validators.required],
      approval: ['', Validators.required],
      code: ['', Validators.required],
      date: ['', Validators.required],
      creator: ['', Validators.required],
      description: ['', Validators.required],
      GithubLink: ['', Validators.required],
      level: ['', Validators.required],
      link: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

}
