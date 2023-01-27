import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NavigationComponent} from "./components/navigation/navigation.component";
import {MapComponent} from "./components/map/map.component";
import {GoogleMapsModule} from "@angular/google-maps";
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {HotelService} from "./services/hotel.service";
import {SwiperModule} from "swiper/angular";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    SwiperModule
  ],
  providers:[HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
