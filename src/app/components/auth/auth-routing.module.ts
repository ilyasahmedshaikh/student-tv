import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { StartupScreenComponent } from './startup-screen/startup-screen.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { VerificationComponent } from './verification/verification.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        component: StartupScreenComponent
      },
      {
        path: 'startup-screen',
        component: StartupScreenComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'verification',
        component: VerificationComponent
      },
      {
        path: 'forgot',
        component: ForgotComponent
      },
      {
        path: 'terms-conditions',
        component: TermsConditionsComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
