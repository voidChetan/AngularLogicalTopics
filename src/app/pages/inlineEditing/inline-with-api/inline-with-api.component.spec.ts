import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineWithAPIComponent } from './inline-with-api.component';

describe('InlineWithAPIComponent', () => {
  let component: InlineWithAPIComponent;
  let fixture: ComponentFixture<InlineWithAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineWithAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineWithAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
