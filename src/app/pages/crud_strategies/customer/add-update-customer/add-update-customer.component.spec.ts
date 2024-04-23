import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateCustomerComponent } from './add-update-customer.component';

describe('AddUpdateCustomerComponent', () => {
  let component: AddUpdateCustomerComponent;
  let fixture: ComponentFixture<AddUpdateCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
