import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrossaryCartComponent } from './grossary-cart.component';

describe('GrossaryCartComponent', () => {
  let component: GrossaryCartComponent;
  let fixture: ComponentFixture<GrossaryCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrossaryCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrossaryCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
