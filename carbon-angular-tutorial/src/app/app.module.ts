import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { UIShellModule, IconModule, IconService } from 'carbon-components-angular';

// @ts-ignore
import Notification16 from '@carbon/icons/es/notification/16';
// @ts-ignore
import UserAvatar16 from '@carbon/icons/es/user--avatar/16';
// @ts-ignore
import AppSwitcher16 from '@carbon/icons/es/app-switcher/16';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIShellModule,
    IconModule
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


