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
  endpoint: any = this.config.API_BASE_URL + '/register';

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
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  signup() {
    this.http.post(this.endpoint, this.programForm.value).subscribe(res => {
      if(res) {
        this.router.navigate(['/auth/verification'], { state:{ code: res, email: this.programForm.value.userName } })
      } else {
        alert('Signup Failed');
      }
    },
    (error) => {
      // console.log(error);
      if (error.status == 200) {
        this.router.navigate(['/auth/verification'], { state:{ code: error.error.text, email: this.programForm.value.userName } })
      } else {
        alert(error.response.data);
      }
    })
  }

  back() {
    this.location.back();
  }

}
