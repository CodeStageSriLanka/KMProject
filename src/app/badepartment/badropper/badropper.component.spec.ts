import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadropperComponent } from './badropper.component';

describe('BadropperComponent', () => {
  let component: BadropperComponent;
  let fixture: ComponentFixture<BadropperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadropperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
