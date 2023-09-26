import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordAlertComponent } from './reset-password-alert.component';

describe('ResetPasswordAlertComponent', () => {
  let component: ResetPasswordAlertComponent;
  let fixture: ComponentFixture<ResetPasswordAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetPasswordAlertComponent]
    });
    fixture = TestBed.createComponent(ResetPasswordAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
