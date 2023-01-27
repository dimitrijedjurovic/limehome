import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {IHotel} from "../../../models/hotel.model";
import {HotelBookingFormComponent} from "../components/hotel-booking-form/hotel-booking-form.component";
import {MatDialog} from "@angular/material/dialog";
import {environment} from "../../../../enviroments/enviroment";

interface HotelResponse {
  items: IHotel[];
}

@Injectable({
  providedIn: 'root',
})
export class HotelService {

  hotels$: BehaviorSubject<IHotel[]> = new BehaviorSubject<IHotel[]>([]);

  selectedHotel$: BehaviorSubject<IHotel | null> = new BehaviorSubject<IHotel | null>(null)
  constructor(private http: HttpClient, private modal: MatDialog) {
  }

  getHotels() {
    return this.http.get<HotelResponse>(`${environment.apiURL}/hotels`).subscribe((res: HotelResponse) => {
      this.hotels$.next(res.items);
      this.selectedHotel$.next(res.items[0]);
    });
  }

  selectHotel(hotel: IHotel) {
    if (this.selectedHotel$.value === hotel) return

    this.selectedHotel$.next(hotel);
  }

  selectHotelByIndex(index: number) {
    this.selectHotel(this.hotels$.value[index]);
  }

  bookHotel() {
    this.modal.open(HotelBookingFormComponent, {
      disableClose: true,
      hasBackdrop: true,
      width: '400px',
    });
  }
}
