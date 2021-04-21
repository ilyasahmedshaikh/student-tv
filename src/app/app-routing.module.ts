import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./components/news/news.module').then(m => m.NewsModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'course-management',
    loadChildren: () => import('./components/course-management/course-management.module').then(m => m.CourseManagementModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./components/message/message.module').then(m => m.MessageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./components/calendar/calendar.module').then(m => m.CalendarModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
