import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceviewerComponent } from './deviceviewer.component';

describe('DeviceviewerComponent', () => {
  let component: DeviceviewerComponent;
  let fixture: ComponentFixture<DeviceviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
