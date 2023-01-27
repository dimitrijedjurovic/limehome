import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SwiperModule} from "swiper/angular";
import {HotelSwiperComponent} from "../components/hotel-swiper/hotel-swiper.component";
import {HotelService} from "../services/hotel.service";

@NgModule({
  imports: [CommonModule, SwiperModule],
  providers: [HotelService],
  declarations: [
    HotelSwiperComponent,
  ],
  exports: [HotelSwiperComponent],
})
export class HotelModule {
}
