import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/http/config/config.service';
import { PresentationalService } from '../../../core/services/presentational/presentational.service';


@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  programForm: any = FormGroup;
  endpoint: any = this.config.API_BASE_URL + '/forgotpassword';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private location: Location,
    private router: Router,
    private config: ConfigService,
    private presentationalS: PresentationalService,
  ) { }

  ngOnInit(): void {
    this.presentationalS.setPresentation('header', false);
    this.presentationalS.setPresentation('bottomBar', false);

    this.formInit();
  }

  formInit() {
    this.programForm = this.fb.group({
      email: ['', Validators.required],
    });
  }

  forgot() {
    let data = {
      'userName': this.programForm.value.email,
    };

    this.http.post(this.endpoint, data).subscribe((res: any) => {
      if (res) {
        this.router.navigate(['/auth/reset-password'], { state: { data: {code: res, email: this.programForm.value.email} } });
      }
    },
    (error) => {
      if (error.status == 200) {
        console.log(error);

        this.router.navigate(['/auth/reset-password'], { state: { data: {code: error.error.text, email: this.programForm.value.email} } });
      }
    })
  }

  back() {
    this.location.back();
  }

}
