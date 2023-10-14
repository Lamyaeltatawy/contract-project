import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewInputComponent } from './add-new-input.component';

describe('AddNewInputComponent', () => {
  let component: AddNewInputComponent;
  let fixture: ComponentFixture<AddNewInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewInputComponent]
    });
    fixture = TestBed.createComponent(AddNewInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
