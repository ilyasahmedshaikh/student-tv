import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/http/config/config.service';
import { PresentationalService } from '../../../core/services/presentational/presentational.service';
import { CheckLoginService } from '../../../core/services/checkLogin/check-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  programForm: any = FormGroup;
  endpoint: any = this.config.API_BASE_URL + '/auth/signin';
  endpointUser: any = this.config.API_BASE_URL + '/api/users';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private config: ConfigService,
    private presentationalS: PresentationalService,
    private checkLogin: CheckLoginService
  ) { }

  ngOnInit(): void {
    this.presentationalS.setPresentation('header', false);
    this.presentationalS.setPresentation('bottomBar', false);

    this.formInit();
  }

  formInit() {
    this.programForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    let data = {
      'username': this.programForm.value.username,
      'password': this.programForm.value.password
    };

    this.http.post(this.endpoint, data).subscribe((res: any) => {
      if (res) {
        this.http.get(`${this.endpointUser}/${res.id}`).subscribe((r: any) => {
          if (r) {
            this.checkLogin.setData(res);
            this.config.setToken(res.token);
            this.router.navigateByUrl('/course-management');
          }
        },
        (error) => {
          alert(error.message);
        })
      }
    },
    (error) => {
      alert(error.message);
    })
  }


}
