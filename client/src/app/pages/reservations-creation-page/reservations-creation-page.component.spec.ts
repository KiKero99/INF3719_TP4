import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsCreationPageComponent } from './reservations-creation-page.component';

describe('ReservationsCreationPageComponent', () => {
  let component: ReservationsCreationPageComponent;
  let fixture: ComponentFixture<ReservationsCreationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsCreationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsCreationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
