import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineBulkUpdateComponent } from './inline-bulk-update.component';

describe('InlineBulkUpdateComponent', () => {
  let component: InlineBulkUpdateComponent;
  let fixture: ComponentFixture<InlineBulkUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineBulkUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineBulkUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
