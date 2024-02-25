import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonUserComponent } from './json-user.component';

describe('JsonUserComponent', () => {
  let component: JsonUserComponent;
  let fixture: ComponentFixture<JsonUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
