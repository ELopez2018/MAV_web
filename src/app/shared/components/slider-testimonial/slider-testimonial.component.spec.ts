import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderTestimonialComponent } from './slider-testimonial.component';

describe('SliderTestimonialComponent', () => {
  let component: SliderTestimonialComponent;
  let fixture: ComponentFixture<SliderTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderTestimonialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
