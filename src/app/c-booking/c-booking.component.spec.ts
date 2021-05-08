import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CBookingComponent } from './c-booking.component';

describe('CBookingComponent', () => {
  let component: CBookingComponent;
  let fixture: ComponentFixture<CBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
