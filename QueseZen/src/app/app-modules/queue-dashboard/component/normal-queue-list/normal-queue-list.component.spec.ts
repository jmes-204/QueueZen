import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalQueueListComponent } from './normal-queue-list.component';

describe('NormalQueueListComponent', () => {
  let component: NormalQueueListComponent;
  let fixture: ComponentFixture<NormalQueueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalQueueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalQueueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
