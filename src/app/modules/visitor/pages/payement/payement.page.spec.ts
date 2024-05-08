import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PayementPage } from './payement.page';

describe('PayementPage', () => {
  let component: PayementPage;
  let fixture: ComponentFixture<PayementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PayementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
