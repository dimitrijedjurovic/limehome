import {Component, Input} from '@angular/core';
import {IHotel} from "../../../models/hotel.model";

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent {

  constructor() {
  }
  @Input() hotel: IHotel;
}
