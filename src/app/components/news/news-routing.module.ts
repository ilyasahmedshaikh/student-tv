import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news.component';
import { NewsListingComponent } from './news-listing/news-listing.component';
import { NewsDetailsComponent } from './news-details/news-details.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
    children: [
      {
        path: '',
        component: NewsListingComponent
      },
      {
        path: 'news-listing',
        component: NewsListingComponent
      },
      {
        path: 'news-details',
        component: NewsDetailsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
