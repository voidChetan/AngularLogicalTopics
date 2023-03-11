import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormCrudComponent } from './template-form-crud.component';

describe('TemplateFormCrudComponent', () => {
  let component: TemplateFormCrudComponent;
  let fixture: ComponentFixture<TemplateFormCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateFormCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateFormCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
