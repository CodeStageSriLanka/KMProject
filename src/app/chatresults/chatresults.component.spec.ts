import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatresultsComponent } from './chatresults.component';

describe('ChatresultsComponent', () => {
  let component: ChatresultsComponent;
  let fixture: ComponentFixture<ChatresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatresultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
