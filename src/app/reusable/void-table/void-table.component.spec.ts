import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoidTableComponent } from './void-table.component';

describe('VoidTableComponent', () => {
  let component: VoidTableComponent;
  let fixture: ComponentFixture<VoidTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoidTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoidTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
