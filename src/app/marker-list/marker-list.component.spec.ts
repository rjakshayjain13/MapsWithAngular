import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerListComponent } from './marker-list.component';

describe('MarkerListComponent', () => {
  let component: MarkerListComponent;
  let fixture: ComponentFixture<MarkerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
