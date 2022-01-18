import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSlideshowComponent } from './login-slideshow.component';

describe('LoginSlideshowComponent', () => {
  let component: LoginSlideshowComponent;
  let fixture: ComponentFixture<LoginSlideshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSlideshowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
