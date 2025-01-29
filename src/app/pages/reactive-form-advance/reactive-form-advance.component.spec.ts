import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormAdvanceComponent } from './reactive-form-advance.component';

describe('ReactiveFormAdvanceComponent', () => {
  let component: ReactiveFormAdvanceComponent;
  let fixture: ComponentFixture<ReactiveFormAdvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormAdvanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveFormAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
