import {
  ChangeDetectorRef,
  Component, OnInit, ViewChild,
} from '@angular/core';
import {BehaviorSubject, catchError, map, Observable, of, Subject, takeUntil} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IHotel} from "../../models/hotel.model";
import {GoogleMap} from "@angular/google-maps";
import {HotelService} from "../../modules/hotel/services/hotel.service";
import {environment} from "../../../enviroments/enviroment";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @ViewChild('map', {static: false}) map: GoogleMap;
  apiLoaded$: Observable<boolean>
  private destroy$: Subject<void> = new Subject();
  readonly hotels$: BehaviorSubject<IHotel[]> = this.hotelService.hotels$;

  selectedHotel: IHotel;

  constructor(
    private httpClient: HttpClient,
    private hotelService: HotelService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    this.apiLoaded$ = httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?key=${environment.apiURL}&callback=initMap`, 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
    }

  ngOnInit(): void {
    this.hotelService.selectedHotel$
      .pipe(takeUntil(this.destroy$))
      .subscribe((hotel: IHotel | null) => {
        if (!hotel) return

        this.selectedHotel = hotel

        if (this.map) {
          this.map.panTo({
            lng: hotel.position.lng,
            lat: hotel.position.lat,
          })
        }

        this.changeDetectorRef.detectChanges();
      });
  }

  hotelClicked(hotel: IHotel) {
    this.hotelService.selectHotel(hotel);
  }
}
