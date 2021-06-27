import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckLoginService } from '../../../core/services/checkLogin/check-login.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  programForm: any = FormGroup;

  preview: any = "../../../../assets/img/img-upload-icon.png";
  imageUploaded: boolean = false;

  userData: any = {};

  constructor(
    private fb: FormBuilder,
    private loginService: CheckLoginService
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.userData = this.loginService.getData();

    this.programForm.patchValue({
      userId: this.userData.userId,
      userName: this.userData.userName,
      firstName: this.userData.firstName,
      lastName: this.userData.lastName,
      email: this.userData.email,
      mobileNo: this.userData.mobileNo,
    })
  }

  formInit() {
    this.programForm = this.fb.group({
      userId: [true, Validators.required],
      userName: [true, Validators.required],
      firstName: [true, Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      mobileNo: ['', Validators.required],
    });
  }

  readURL(event: any): void {
    if (event.target['files'] && event.target['files'][0]) {
      const file = event.target['files'][0];

      const reader = new FileReader();
      reader.onload = e => this.preview = reader.result;

      reader.readAsDataURL(file);
    }
  }

}
