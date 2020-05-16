import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from "./carousel/carousel.module";
import { CarouselSlideModule } from "./carousel-slide/carousel-slide.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    CarouselSlideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
