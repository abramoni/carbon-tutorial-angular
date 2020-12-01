import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
	BreadcrumbModule,
	ButtonModule,
	GridModule,
	TabsModule
} from 'carbon-components-angular';
import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
	let component: LandingPageComponent;
	let fixture: ComponentFixture<LandingPageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ LandingPageComponent ],
			imports: [BreadcrumbModule, ButtonModule, GridModule, TabsModule]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LandingPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
