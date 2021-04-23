import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{ BackNavigateService } from '../../../core/services/back-navigate/back-navigate.service';
import { PresentationalService } from '../../../core/services/presentational/presentational.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {

  programForm: any = FormGroup;
  data: any = {};

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private backNavigateService: BackNavigateService,
    private presentationalS: PresentationalService
  ) {
    this.data = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    this.presentationalS.setPresentation('header', false);
    this.presentationalS.setPresentation('bottomBar', false);
    
    this.formInit();

    this.programForm.patchValue({
      email: this.data.email
    })
  }

  formInit() {
    this.programForm = this.fb.group({
      email: ['', Validators.required],
      verificationCode: ['', Validators.required],
    });
  }

  verify() {
    if (this.data.code == this.programForm.value.verificationCode) {
      this.router.navigateByUrl('/auth/login');
    } else {
      alert('Invalid verification code');
    }
  }

}
