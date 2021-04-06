import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsListingComponent } from './news-listing/news-listing.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
    children: [
      {
        path: 'news-details',
        component: NewsDetailsComponent
      },
      {
        path: 'news-listing',
        component: NewsListingComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
