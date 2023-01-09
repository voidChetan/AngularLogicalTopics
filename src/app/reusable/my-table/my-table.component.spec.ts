import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTableComponent } from './my-table.component';

describe('MyTableComponent', () => {
  let component: MyTableComponent;
  let fixture: ComponentFixture<MyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
