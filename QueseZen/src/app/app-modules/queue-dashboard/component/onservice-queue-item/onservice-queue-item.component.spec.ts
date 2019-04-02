import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnserviceQueueItemComponent } from './onservice-queue-item.component';

describe('OnserviceQueueItemComponent', () => {
  let component: OnserviceQueueItemComponent;
  let fixture: ComponentFixture<OnserviceQueueItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnserviceQueueItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnserviceQueueItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
