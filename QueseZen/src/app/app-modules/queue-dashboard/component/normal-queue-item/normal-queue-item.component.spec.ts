import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalQueueItemComponent } from './normal-queue-item.component';

describe('NormalQueueItemComponent', () => {
  let component: NormalQueueItemComponent;
  let fixture: ComponentFixture<NormalQueueItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalQueueItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalQueueItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
