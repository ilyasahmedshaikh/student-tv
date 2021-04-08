import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { CoursesTakenComponent } from './courses-taken/courses-taken.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { StudiesComponent } from './studies/studies.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ExperienceListingComponent } from './experiences/experience-listing/experience-listing.component';
import { ExperienceDetailsComponent } from './experiences/experience-details/experience-details.component';
import { CoursesDetailsComponent } from './courses-taken/courses-details/courses-details.component';
import { CoursesListingComponent } from './courses-taken/courses-listing/courses-listing.component';


@NgModule({
  declarations: [ProfileComponent, CoursesTakenComponent, ExperiencesComponent, StudiesComponent, PrivacyPolicyComponent, ViewProfileComponent, ExperienceListingComponent, ExperienceDetailsComponent, CoursesDetailsComponent, CoursesListingComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
