import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/http/config/config.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  programForm: any = FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.programForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  signup() {
    let user = {
      "accountNonExpired": true,
      "accountNonLocked": true,
      "authorities": [
        {
          "authority": "string"
        }
      ],
      "avatar": "string",
      "credentialsNonExpired": true,
      "enabled": true,
      "firstName": "string",
      "id": 0,
      "lastName": "string",
      "password": "string",
      "status": "string",
      "userName": "string",
    }

    this.http.post(this.config.API_BASE_URL + '/register', user).subscribe(res => {
      console.log(res);
    })
  }

}
