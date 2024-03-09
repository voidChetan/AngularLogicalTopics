import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectionComponent } from './content-projection.component';

describe('ContentProjectionComponent', () => {
  let component: ContentProjectionComponent;
  let fixture: ComponentFixture<ContentProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentProjectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
