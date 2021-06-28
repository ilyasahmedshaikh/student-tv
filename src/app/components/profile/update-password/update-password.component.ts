import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/http/config/config.service';
import { CheckLoginService } from '../../../core/services/checkLogin/check-login.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {

  programForm: any = FormGroup;
  endpoint: any = this.config.API_BASE_URL + '/user/resetPassword';
  passwordMatches: boolean = false;

  userData: any = {};

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private config: ConfigService,
    private loginService: CheckLoginService
  ) { }

  ngOnInit(): void {
    this.userData = this.loginService.getData();
    this.passwordMatches = false;

    this.formInit();

    this.programForm.patchValue({
      email: this.userData.email,
    })

    this.programForm.valueChanges.subscribe((newValues: any) => {
      if (newValues.password == newValues.confirmPassword) this.passwordMatches = true;
      else this.passwordMatches = false;
    })
  }

  formInit() {
    this.programForm = this.fb.group({
      email:  ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  updatePassword() {
    this.http.post(this.endpoint, this.programForm.value).subscribe((res: any) => {
      if (res) {
        alert('Password Changed Successfully');
        this.router.navigateByUrl('/auth/login');
      }
    },
    (error) => {
      alert(error.error.text);
      this.router.navigateByUrl('/auth/login');
    })
  }

}
