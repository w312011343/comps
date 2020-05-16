import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from './carousel.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { CarouselDotComponent } from './carousel-dot/carousel-dot.component';


@NgModule({
  declarations: [CarouselComponent, CarouselItemComponent, CarouselDotComponent],
  imports: [
    CommonModule
  ],
  exports:[CarouselComponent]
})
export class CarouselModule { }
