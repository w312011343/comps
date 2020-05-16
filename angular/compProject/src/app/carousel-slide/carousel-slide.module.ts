import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselSlideComponent } from './carousel-slide.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { CarouselDotComponent } from './carousel-dot/carousel-dot.component';


@NgModule({
  declarations: [CarouselSlideComponent, CarouselItemComponent, CarouselDotComponent],
  imports: [
    CommonModule
  ],
  exports:[CarouselSlideComponent]
})
export class CarouselSlideModule { }
