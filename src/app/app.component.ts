import {Component, OnInit} from '@angular/core';
import {HotelService} from "./services/hotel.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private hotelService: HotelService) {
  }

  ngOnInit() {
    this.hotelService.getHotels();
  }
}
