import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { CoursesTakenComponent } from './courses-taken/courses-taken.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { StudiesComponent } from './studies/studies.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        component: ViewProfileComponent
      },
      {
        path: 'view-profile',
        component: ViewProfileComponent
      },
      {
        path: 'courses-taken',
        component: CoursesTakenComponent
      },
      {
        path: 'experiences',
        component: ExperiencesComponent
      },
      {
        path: 'studies',
        component: StudiesComponent
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
