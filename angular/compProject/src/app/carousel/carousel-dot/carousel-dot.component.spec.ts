import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselDotComponent } from './carousel-dot.component';

describe('CarouselDotComponent', () => {
  let component: CarouselDotComponent;
  let fixture: ComponentFixture<CarouselDotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselDotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
