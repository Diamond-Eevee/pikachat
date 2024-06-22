import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatComponent } from './chat.component';
import { ServersComponent } from './servers/servers.component';
import { ChannelsComponent } from './channels/channels.component';
import { MessagesComponent } from './messages/messages.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChatComponent,
    ServersComponent,
    ChannelsComponent,
    MessagesComponent,
    SendMessageComponent,
  ],
  imports: [
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: []
})
export class ChatModule { }
