import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  endpoint: any = this.config.API_BASE_URL + '/api/users/register';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
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
      id: [0, Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      username: [''],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      role: ['user'],
      status: [true],
    });
  }

  signup() {
    let email = this.programForm.value.email.split("@");
    let username = email[0];

    let data = {
      ...this.programForm.value,
      username: username
    }

    this.http.post(this.endpoint, data).subscribe(res => {
      console.log(res);
      
      if(res) {
        this.router.navigate(['/auth/verification'], { state:{ code: res, email: this.programForm.value.userName } })
      } else {
        alert('Signup Failed');
      }
    },
    (error) => {
      alert(error.response.data);
    })
  }

}
