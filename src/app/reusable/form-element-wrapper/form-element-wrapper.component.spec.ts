import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormElementWrapperComponent } from './form-element-wrapper.component';

describe('FormElementWrapperComponent', () => {
  let component: FormElementWrapperComponent;
  let fixture: ComponentFixture<FormElementWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormElementWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormElementWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
