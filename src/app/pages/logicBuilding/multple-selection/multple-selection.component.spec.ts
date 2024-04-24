import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultpleSelectionComponent } from './multple-selection.component';

describe('MultpleSelectionComponent', () => {
  let component: MultpleSelectionComponent;
  let fixture: ComponentFixture<MultpleSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultpleSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultpleSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
