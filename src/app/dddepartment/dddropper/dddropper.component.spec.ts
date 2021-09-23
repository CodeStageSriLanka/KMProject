import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DddropperComponent } from './dddropper.component';

describe('DddropperComponent', () => {
  let component: DddropperComponent;
  let fixture: ComponentFixture<DddropperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DddropperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DddropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
