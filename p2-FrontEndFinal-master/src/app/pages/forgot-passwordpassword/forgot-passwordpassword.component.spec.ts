import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordpasswordComponent } from './forgot-passwordpassword.component';

describe('ForgotPasswordpasswordComponent', () => {
  let component: ForgotPasswordpasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPasswordpasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
