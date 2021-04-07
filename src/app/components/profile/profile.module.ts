import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { CoursesTakenComponent } from './courses-taken/courses-taken.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { StudiesComponent } from './studies/studies.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';


@NgModule({
  declarations: [ProfileComponent, CoursesTakenComponent, ExperiencesComponent, StudiesComponent, PrivacyPolicyComponent, ViewProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
