import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDataCardComponent } from './top-data-card.component';

describe('TopDataCardComponent', () => {
  let component: TopDataCardComponent;
  let fixture: ComponentFixture<TopDataCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopDataCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
