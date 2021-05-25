import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RepoTableComponent } from './repo-table.component';
import { TableModule, LinkModule, PaginationModule } from 'carbon-components-angular';
import { Apollo } from 'apollo-angular';

describe('RepoTableComponent', () => {
	let component: RepoTableComponent;
	let fixture: ComponentFixture<RepoTableComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ RepoTableComponent ],
			imports: [
				TableModule, LinkModule, PaginationModule
			],
			providers: [ Apollo ],
			schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RepoTableComponent);
		component = fixture.componentInstance;
		// fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
