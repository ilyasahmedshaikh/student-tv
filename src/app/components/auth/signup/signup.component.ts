import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/http/config/config.service';
import{ BackNavigateService } from '../../../core/services/back-navigate/back-navigate.service';
import { PresentationalService } from '../../../core/services/presentational/presentational.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  programForm: any = FormGroup;
  endpoint: any = this.config.API_BASE_URL + '/user/create';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private location: Location,
    private config: ConfigService,
    private backNavigateService: BackNavigateService,
    private presentationalS: PresentationalService
  ) { }

  ngOnInit(): void {
    this.presentationalS.setPresentation('header', false);
    this.presentationalS.setPresentation('bottomBar', false);

    this.formInit();
  }

  formInit() {
    this.programForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      mobileNo: ['', Validators.required],
      job: ['', Validators.required],
      studies: ['', Validators.required],
      surname: ['', Validators.required],
      userName: [''],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      role: ['student', Validators.required],
      status: [true],
    });
  }

  signup() {
    let email = this.programForm.value.email.split("@");
    let userName = email[0];

    let data = {
      ...this.programForm.value,
      userName: userName,
      type: this.programForm.value.role
    }
    
    this.http.post(this.endpoint, data).subscribe((res: any) => {
      if(res) {
        alert(res.message);
        this.router.navigateByUrl('/auth/login');
      } else {
        alert('Signup Failed');
      }
    },
    (error) => {
      alert(error);
    })
  }

  back() {
    this.location.back();
  }

}
