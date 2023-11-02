import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationsCardComponent } from './registrations-card.component';

describe('RegistrationsCardComponent', () => {
  let component: RegistrationsCardComponent;
  let fixture: ComponentFixture<RegistrationsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
