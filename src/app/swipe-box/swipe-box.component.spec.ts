import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeBoxComponent } from './swipe-box.component';

describe('SwipeBoxComponent', () => {
  let component: SwipeBoxComponent;
  let fixture: ComponentFixture<SwipeBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwipeBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
