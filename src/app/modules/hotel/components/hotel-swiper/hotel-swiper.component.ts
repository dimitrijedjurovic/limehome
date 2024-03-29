import {Component, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject, Subject, takeUntil} from "rxjs";
import {IHotel} from "../../../../models/hotel.model";
import {SwiperComponent} from "swiper/angular";
import {HotelService} from "../../services/hotel.service";
import {swiperBreakpoints} from "../../../../../constants/swiper.constants";

@Component({
  selector: 'app-hotel-swiper',
  templateUrl: './hotel-swiper.component.html',
  styleUrls: ['./hotel-swiper.component.scss']
})
export class HotelSwiperComponent implements OnInit {
  @ViewChild('swiper', {static: false}) swiper: SwiperComponent;
  private destroy$: Subject<void> = new Subject();
  readonly hotels$: BehaviorSubject<IHotel[]> = this.hotelService.hotels$;
  readonly breakpoints = swiperBreakpoints;

  constructor(private hotelService: HotelService) {
  }

  ngOnInit(): void {
    this.hotelService.selectedHotel$
      .pipe(takeUntil(this.destroy$))
      .subscribe((hotel: IHotel | null) => {
        if (!hotel) return;

        this.slideToHotel(hotel);
      });
  }

  slideToHotel(hotel: IHotel) {
    const hotels = this.hotels$.value
    const index = hotels.indexOf(hotel)

    this.swiper?.swiperRef.slideToLoop(index, 500)
  }

  onSlideChange() {
    const index = this.swiper?.swiperRef.realIndex
    this.hotelService.selectHotelByIndex(index);
  }

  hotelClicked(hotel: IHotel) {
    this.hotelService.selectHotel(hotel)
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
