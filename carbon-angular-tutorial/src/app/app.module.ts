import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppSwitcherModule, NotificationModule, UserAvatarModule } from '@carbon/icons-angular';
import { IconModule, IconService, UIShellModule } from 'carbon-components-angular';
import Notification16 from '@carbon/icons/es/notification/16';
import UserAvatar16 from '@carbon/icons/es/user--avatar/16';
import AppSwitcher16 from '@carbon/icons/es/app-switcher/16';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIShellModule,
    IconModule,

    NotificationModule,
    UserAvatarModule,
    AppSwitcherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(protected iconService: IconService) {
    iconService.registerAll([
      Notification16,
      UserAvatar16,
      AppSwitcher16
    ]);
  }
}
