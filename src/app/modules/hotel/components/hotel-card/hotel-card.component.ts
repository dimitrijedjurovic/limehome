import {Component, Input} from '@angular/core';
import {IHotel} from "../../../../models/hotel.model";
import {HotelService} from "../../services/hotel.service";

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent {
  @Input() hotel: IHotel;

  constructor(private hotelService: HotelService) {
  }

  bookHotel() {
    this.hotelService.bookHotel()
  }
}
