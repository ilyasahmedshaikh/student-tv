import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseManagementComponent } from './course-management.component';
import { CoursesListingComponent } from './courses-listing/courses-listing.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

const routes: Routes = [
  {
    path: '',
    component: CourseManagementComponent,
    children: [
      {
        path: '',
        component: CoursesListingComponent
      },
      {
        path: 'course-listing',
        component: CoursesListingComponent
      },
      {
        path: 'course-details',
        component: CourseDetailsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseManagementRoutingModule { }
