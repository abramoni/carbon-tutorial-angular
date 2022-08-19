import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import Notification16 from '@carbon/icons/es/notification/16';
import UserAvatar16 from '@carbon/icons/es/user--avatar/16';
import Apps16 from '@carbon/icons/es/apps/16';

// carbon-components-angular default imports
import {
  UIShellModule,
  IconModule,
  IconService,
} from 'carbon-components-angular';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, UIShellModule, IconModule],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(protected iconService: IconService) {
    iconService.registerAll([Notification16, UserAvatar16, Apps16]);
  }
}
