import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SwiperModule} from "swiper/angular";
import {HotelSwiperComponent} from "./components/hotel-swiper/hotel-swiper.component";
import {HotelCardComponent} from "./components/hotel-card/hotel-card.component";
import {HotelBookingFormComponent} from "./components/hotel-booking-form/hotel-booking-form.component";
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  declarations: [
    HotelSwiperComponent,
    HotelCardComponent,
    HotelBookingFormComponent
  ],
  exports: [HotelSwiperComponent],
})
export class HotelModule {
}
