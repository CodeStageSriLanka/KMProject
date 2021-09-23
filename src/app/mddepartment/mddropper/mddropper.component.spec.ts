import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MddropperComponent } from './mddropper.component';

describe('MddropperComponent', () => {
  let component: MddropperComponent;
  let fixture: ComponentFixture<MddropperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MddropperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MddropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
