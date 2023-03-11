import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentContainerOutletComponent } from './ng-content-container-outlet.component';

describe('NgContentContainerOutletComponent', () => {
  let component: NgContentContainerOutletComponent;
  let fixture: ComponentFixture<NgContentContainerOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgContentContainerOutletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgContentContainerOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
