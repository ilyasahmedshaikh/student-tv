import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/http/config/config.service';
import { PresentationalService } from '../../../core/services/presentational/presentational.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  programForm: any = FormGroup;
  endpoint: any = this.config.API_BASE_URL + '/user/resetPassword';
  passwordMatches: boolean = false;

  data: any = {};

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private config: ConfigService,
    private presentationalS: PresentationalService,
  ) {
    this.data = this.router.getCurrentNavigation()?.extras?.state?.data;
  }

  ngOnInit(): void {
    this.presentationalS.setPresentation('header', false);
    this.presentationalS.setPresentation('bottomBar', false);
    this.passwordMatches = false;

    this.formInit();

    this.programForm.valueChanges.subscribe((newValues: any) => {
      if (newValues.password == newValues.confirmPassword) this.passwordMatches = true;
      else this.passwordMatches = false;
    })

    this.programForm.patchValue({
      email: this.data.email
    });
  }

  formInit() {
    this.programForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  resetPassword() {
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
