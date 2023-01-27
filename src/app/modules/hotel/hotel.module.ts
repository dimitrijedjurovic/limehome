import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SwiperModule} from "swiper/angular";
import {HotelSwiperComponent} from "../components/hotel-swiper/hotel-swiper.component";
import {HotelCardComponent} from "../components/hotel-card/hotel-card.component";

@NgModule({
  imports: [CommonModule, SwiperModule],
  declarations: [
    HotelSwiperComponent,
    HotelCardComponent
  ],
  exports: [HotelSwiperComponent],
})
export class HotelModule {
}
