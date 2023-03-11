import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormCrudComponent } from './reactive-form-crud.component';

describe('ReactiveFormCrudComponent', () => {
  let component: ReactiveFormCrudComponent;
  let fixture: ComponentFixture<ReactiveFormCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
