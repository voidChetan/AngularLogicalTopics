import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanSelectionComponent } from './plan-selection.component';

describe('PlanSelectionComponent', () => {
  let component: PlanSelectionComponent;
  let fixture: ComponentFixture<PlanSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
