import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingOptionsComponent } from './meeting-options.component';

describe('MeetingOptionsComponent', () => {
  let component: MeetingOptionsComponent;
  let fixture: ComponentFixture<MeetingOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeetingOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
