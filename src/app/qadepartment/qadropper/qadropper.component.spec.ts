import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QadropperComponent } from './qadropper.component';

describe('QadropperComponent', () => {
  let component: QadropperComponent;
  let fixture: ComponentFixture<QadropperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QadropperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QadropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
