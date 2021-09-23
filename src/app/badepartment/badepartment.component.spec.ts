import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadepartmentComponent } from './badepartment.component';

describe('BadepartmentComponent', () => {
  let component: BadepartmentComponent;
  let fixture: ComponentFixture<BadepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
