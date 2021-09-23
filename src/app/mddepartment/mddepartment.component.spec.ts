import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MddepartmentComponent } from './mddepartment.component';

describe('MddepartmentComponent', () => {
  let component: MddepartmentComponent;
  let fixture: ComponentFixture<MddepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MddepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MddepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
