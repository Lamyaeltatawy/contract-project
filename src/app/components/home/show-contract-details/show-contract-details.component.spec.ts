import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowContractDetailsComponent } from './show-contract-details.component';

describe('ShowContractDetailsComponent', () => {
  let component: ShowContractDetailsComponent;
  let fixture: ComponentFixture<ShowContractDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowContractDetailsComponent]
    });
    fixture = TestBed.createComponent(ShowContractDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
