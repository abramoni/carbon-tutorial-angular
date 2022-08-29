import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoTableComponent } from './repo-table.component';
import { TableModule } from 'carbon-components-angular';

describe('RepoTableComponent', () => {
	let component: RepoTableComponent;
	let fixture: ComponentFixture<RepoTableComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ RepoTableComponent ],
			imports: [
				TableModule
			]
		})
		.compileComponents();

		fixture = TestBed.createComponent(RepoTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
