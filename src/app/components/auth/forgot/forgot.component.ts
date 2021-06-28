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
    this.router.navigate(['/auth/reset-password'], { state: { data: { email: this.programForm.value.email} } });
  }

  back() {
    this.location.back();
  }

}
