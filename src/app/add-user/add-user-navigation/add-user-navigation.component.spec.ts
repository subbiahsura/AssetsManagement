import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserNavigationComponent } from './add-user-navigation.component';

describe('AddUserNavigationComponent', () => {
  let component: AddUserNavigationComponent;
  let fixture: ComponentFixture<AddUserNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUserNavigationComponent]
    });
    fixture = TestBed.createComponent(AddUserNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
