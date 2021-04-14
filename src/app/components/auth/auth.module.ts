import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { StartupScreenComponent } from './startup-screen/startup-screen.component';


@NgModule({
  declarations: [AuthComponent, LoginComponent, SignupComponent, ForgotComponent, TermsConditionsComponent, StartupScreenComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
