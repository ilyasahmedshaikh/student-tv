import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';


@NgModule({
  declarations: [AuthComponent, LoginComponent, SignupComponent, ForgotComponent, TermsConditionsComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
