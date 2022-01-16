import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CardPatnersComponent } from './components/card-patners/card-patners.component';
import { CardPracticeComponent } from './components/card-practice/card-practice.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';
import { MaterialModule } from './material.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SliderTestimonialComponent } from './components/slider-testimonial/slider-testimonial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormContactUsComponent } from './components/form-contact-us/form-contact-us.component';
import { PayOnlineComponent } from './components/pay-online/pay-online.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    CarouselModule,
    MaterialModule,
  ],
  declarations: [
    NavbarComponent,
    CardPatnersComponent,
    CardPracticeComponent,
    TestimonialCardComponent,
    FooterComponent,
    SliderTestimonialComponent,
    FormContactUsComponent,
    PayOnlineComponent
  ],
  exports: [
    NavbarComponent,
    CardPracticeComponent,
    CardPatnersComponent,
    MaterialModule,
    TestimonialCardComponent,
    FooterComponent,
    SliderTestimonialComponent,
    CarouselModule,
    FormContactUsComponent,
    PayOnlineComponent

  ],
})
export class SharedModule {}
