import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { StudiesComponent } from './studies/studies.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ExperienceListingComponent } from './experiences/experience-listing/experience-listing.component';
import { ExperienceDetailsComponent } from './experiences/experience-details/experience-details.component';
import { StudiesListingComponent } from './studies/studies-listing/studies-listing.component';
import { StudiesDetailsComponent } from './studies/studies-details/studies-details.component';


@NgModule({
  declarations: [ProfileComponent, ExperiencesComponent, StudiesComponent, PrivacyPolicyComponent, ViewProfileComponent, ExperienceListingComponent, ExperienceDetailsComponent, StudiesListingComponent, StudiesDetailsComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
