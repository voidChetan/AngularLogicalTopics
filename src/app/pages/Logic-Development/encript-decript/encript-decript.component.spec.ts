import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncriptDecriptComponent } from './encript-decript.component';

describe('EncriptDecriptComponent', () => {
  let component: EncriptDecriptComponent;
  let fixture: ComponentFixture<EncriptDecriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncriptDecriptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncriptDecriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
