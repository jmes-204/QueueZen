import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmSearchComponent } from './bm-search.component';

describe('BmSearchComponent', () => {
  let component: BmSearchComponent;
  let fixture: ComponentFixture<BmSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
