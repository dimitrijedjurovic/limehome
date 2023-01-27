import {Component} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HotelService} from "../../services/hotel.service";
import {IHotel} from "../../models/hotel.model";

@Component({
  selector: 'app-hotel-swiper',
  templateUrl: './hotel-swiper.component.html',
  styleUrls: ['./hotel-swiper.component.scss']
})
export class HotelSwiperComponent {
  readonly hotels$: BehaviorSubject<IHotel[]> = this.hotelService.hotels$;

  constructor(private hotelService: HotelService) {
  }
}
