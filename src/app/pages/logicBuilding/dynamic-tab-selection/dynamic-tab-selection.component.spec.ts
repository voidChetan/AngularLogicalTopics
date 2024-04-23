import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTabSelectionComponent } from './dynamic-tab-selection.component';

describe('DynamicTabSelectionComponent', () => {
  let component: DynamicTabSelectionComponent;
  let fixture: ComponentFixture<DynamicTabSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicTabSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicTabSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
