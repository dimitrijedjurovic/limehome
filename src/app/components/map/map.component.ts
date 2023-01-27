import {
  Component,
} from '@angular/core';
import {BehaviorSubject, catchError, map, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {HotelService} from "../../services/hotel.service";
import {IHotel} from "../../models/hotel.model";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  apiLoaded$: Observable<boolean>
  readonly hotels$: BehaviorSubject<IHotel[]> = this.hotelService.hotels$;

  constructor(
    private httpClient: HttpClient,
    private hotelService: HotelService
  ) {
    this.apiLoaded$ = httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?key=AIzaSyDmaB4Y91NdEVYTHWSE6-nJ6bJqJOPJlHk&callback=initMap`, 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }
}
