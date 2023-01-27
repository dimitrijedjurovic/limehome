import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NavigationComponent} from "./components/navigation/navigation.component";
import {MapComponent} from "./components/map/map.component";
import {GoogleMapsModule} from "@angular/google-maps";
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {HotelService} from "./modules/services/hotel.service";
import {HotelModule} from "./modules/hotel/hotel.module";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    HotelModule
  ],
  providers:[HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
