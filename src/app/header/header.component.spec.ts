import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { UIShellModule } from "carbon-components-angular";

import { HeaderComponent } from "./header.component";
import { NotificationModule } from "@carbon/icons-angular";
import { UserAvatarModule } from "@carbon/icons-angular";
import { AppSwitcherModule } from "@carbon/icons-angular";

describe("TutorialHeaderComponent", () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [HeaderComponent],
			imports: [
				UIShellModule,
				NotificationModule,
				UserAvatarModule,
				AppSwitcherModule,
			],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
