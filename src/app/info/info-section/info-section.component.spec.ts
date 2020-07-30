import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GridModule } from 'carbon-components-angular';
import { PersonFavorite32Module } from '@carbon/icons-angular/lib/person--favorite/32';
import { Globe32Module } from '@carbon/icons-angular/lib/globe/32';
import { Application32Module } from '@carbon/icons-angular/lib/application/32';

import { InfoSectionComponent } from './info-section.component';
import { InfoCardComponent } from '../info-card/info-card.component';

describe('InfoSectionComponent', () => {
	let component: InfoSectionComponent;
	let fixture: ComponentFixture<InfoSectionComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ InfoSectionComponent, InfoCardComponent ],
			imports: [
				GridModule,
				PersonFavorite32Module,
				Globe32Module,
				Application32Module
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(InfoSectionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
