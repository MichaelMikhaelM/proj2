import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangelastNameComponent } from './changelast-name.component';

describe('ChangelastNameComponent', () => {
  let component: ChangelastNameComponent;
  let fixture: ComponentFixture<ChangelastNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangelastNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangelastNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
