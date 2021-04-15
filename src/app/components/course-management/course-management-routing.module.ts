import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseManagementComponent } from './course-management.component';
import { CoursesListingComponent } from './courses-listing/courses-listing.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ClassDetailsComponent } from './class-details/class-details.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { AddNewQuestionComponent } from './add-new-question/add-new-question.component';

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
      },
      {
        path: 'class-details',
        component: ClassDetailsComponent
      },
      {
        path: 'test-details',
        component: TestDetailsComponent
      },
      {
        path: 'add-new-question',
        component: AddNewQuestionComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseManagementRoutingModule { }
