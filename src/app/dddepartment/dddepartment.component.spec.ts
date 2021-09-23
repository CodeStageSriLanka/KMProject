import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DddepartmentComponent } from './dddepartment.component';

describe('DddepartmentComponent', () => {
  let component: DddepartmentComponent;
  let fixture: ComponentFixture<DddepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DddepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DddepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
