import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { StudiesComponent } from './studies/studies.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ExperienceListingComponent } from './experiences/experience-listing/experience-listing.component';
import { ExperienceDetailsComponent } from './experiences/experience-details/experience-details.component';
import { StudiesListingComponent } from './studies/studies-listing/studies-listing.component';
import { StudiesDetailsComponent } from './studies/studies-details/studies-details.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';

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
        path: 'experiences',
        component: ExperiencesComponent,
        children: [
          {
            path: '',
            component: ExperienceListingComponent
          },
          {
            path: 'experience-listing',
            component: ExperienceListingComponent
          },
          {
            path: 'experience-details',
            component: ExperienceDetailsComponent
          },
        ]
      },
      {
        path: 'studies',
        component: StudiesComponent,
        children: [
          {
            path: '',
            component: StudiesListingComponent
          },
          {
            path: 'studies-listing',
            component: StudiesListingComponent
          },
          {
            path: 'studies-details',
            component: StudiesDetailsComponent
          },
        ]
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent
      },
      {
        path: 'update-password',
        component: UpdatePasswordComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
