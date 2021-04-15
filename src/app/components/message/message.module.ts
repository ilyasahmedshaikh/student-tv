import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageRoutingModule } from './message-routing.module';
import { MessageComponent } from './message.component';
import { ChatListingComponent } from './chat-listing/chat-listing.component';
import { ChatDetailsComponent } from './chat-details/chat-details.component';
import { NewChatComponent } from './new-chat/new-chat.component';


@NgModule({
  declarations: [MessageComponent, ChatListingComponent, ChatDetailsComponent, NewChatComponent],
  imports: [
    CommonModule,
    MessageRoutingModule
  ]
})
export class MessageModule { }
