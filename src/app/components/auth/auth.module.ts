import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { StartupScreenComponent } from './startup-screen/startup-screen.component';
import { VerificationComponent } from './verification/verification.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [AuthComponent, LoginComponent, SignupComponent, ForgotComponent, TermsConditionsComponent, StartupScreenComponent, VerificationComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
