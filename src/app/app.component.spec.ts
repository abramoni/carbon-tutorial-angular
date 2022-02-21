import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { UIShellModule, IconService } from 'carbon-components-angular';
//import { UIShellModule } from 'carbon-components-angular/ui-shell/ui-shell.module';
import Notification16 from '@carbon/icons/es/notification/16';
import UserAvatar16 from '@carbon/icons/es/user--avatar/16';
import AppSwitcher16 from '@carbon/icons/es/app-switcher/16';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  TestBed.configureTestingModule({
    declarations: [HeaderComponent],
    imports: [UIShellModule]
  });

  // it(`should have as title 'carbon-angular-tutorial'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('carbon-angular-tutorial');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('carbon-angular-tutorial app is running!');
  // });
});

export class AppComponentSpec {

  constructor(protected iconService: IconService) {
    iconService.registerAll([
      Notification16,
      UserAvatar16,
      AppSwitcher16
    ]);
  }

}

