import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangefirstNameComponent } from './changefirst-name.component';

describe('ChangefirstNameComponent', () => {
  let component: ChangefirstNameComponent;
  let fixture: ComponentFixture<ChangefirstNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangefirstNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangefirstNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
