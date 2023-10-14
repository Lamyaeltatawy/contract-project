import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractOptionsComponent } from './contract-options.component';

describe('ContractOptionsComponent', () => {
  let component: ContractOptionsComponent;
  let fixture: ComponentFixture<ContractOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContractOptionsComponent]
    });
    fixture = TestBed.createComponent(ContractOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
