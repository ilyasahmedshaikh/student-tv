import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/http/config/config.service';
import { CheckLoginService } from '../../../core/services/checkLogin/check-login.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  programForm: any = FormGroup;
  endpointData: any = this.config.API_BASE_URL + '/user/update';
  endpointImage: any = this.config.API_BASE_URL + '/user/uploadImage';
  endpointUser: any = this.config.API_BASE_URL + '/user/view';

  preview: any = "../../../../assets/img/img-upload-icon.png";
  imageUploaded: boolean = false;

  userData: any = {};
  picture: any = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private config: ConfigService,
    private loginService: CheckLoginService
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.userData = this.loginService.getData();

    this.getUserData();
  }

  formInit() {
    this.programForm = this.fb.group({
      userId: ['', Validators.required],
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      mobileNo: ['', Validators.required],
    });
  }

  readURL(event: any): void {
    if (event.target['files'] && event.target['files'][0]) {
      const image = event.target['files'][0];
      this.picture = image;
      
      const reader = new FileReader();
      reader.onload = e => this.preview = reader.result;

      reader.readAsDataURL(image);
    }
  }

  updateProfile() {
    this.http.post(this.endpointData, this.programForm.value).subscribe((res: any) => {
      if (res) {
        alert('Profile Updated.');

        // upload picture
        if(this.picture) this.updateImage();
        else this.getUserData();
      }
    },
    (error) => {
      alert(error.error.text);
    })
  }

  updateImage() {
    const formData = new FormData();
    formData.append('file', this.picture);

    this.http.post(`${this.endpointImage}/${this.userData.userId}`, formData).subscribe((res: any) => {
      if (res) {
        alert('Picture Updated.');

        // get updated data and picture 
        this.getUserData();
      }
    },
    (error) => {
      alert(error.error.text);
    })
  }

  getUserData() {
    this.http.get(`${this.endpointUser}/${this.userData.userId}`).subscribe(res => {
      this.userData = res;

      this.programForm.patchValue({
        userId: this.userData.id,
        userName: this.userData.userName,
        firstName: this.userData.firstName,
        lastName: this.userData.lastName,
        email: this.userData.email,
        mobileNo: this.userData.mobileNo,
      })
    })
  }

}
