import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QadepartmentComponent } from './qadepartment.component';

describe('QadepartmentComponent', () => {
  let component: QadepartmentComponent;
  let fixture: ComponentFixture<QadepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QadepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QadepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
