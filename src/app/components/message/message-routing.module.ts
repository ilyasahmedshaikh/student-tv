import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageComponent } from './message.component';
import { ChatListingComponent } from './chat-listing/chat-listing.component';
import { ChatDetailsComponent } from './chat-details/chat-details.component';
import { NewChatComponent } from './new-chat/new-chat.component';

const routes: Routes = [
  {
    path: '',
    component: MessageComponent,
    children: [
      {
        path: '',
        component: ChatListingComponent
      },
      {
        path: 'chat-listing',
        component: ChatListingComponent
      },
      {
        path: 'chat-details',
        component: ChatDetailsComponent
      },
      {
        path: 'new-chat',
        component: NewChatComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageRoutingModule { }
