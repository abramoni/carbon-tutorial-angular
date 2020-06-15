import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { InfoCardComponent } from "./info-card.component";
import { Application32Module } from "@carbon/icons-angular/lib/application/32";

describe("InfoCardComponent", () => {
	let component: InfoCardComponent;
	let fixture: ComponentFixture<InfoCardComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [InfoCardComponent],
			imports: [Application32Module],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(InfoCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
