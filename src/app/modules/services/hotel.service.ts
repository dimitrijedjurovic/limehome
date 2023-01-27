import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {IHotel} from "../../models/hotel.model";

interface HotelResponse {
  items: IHotel[];
}

@Injectable({
  providedIn: 'root',
})
export class HotelService {

  hotels$: BehaviorSubject<IHotel[]> = new BehaviorSubject<IHotel[]>([]);

  selectedHotel$: BehaviorSubject<IHotel | null> = new BehaviorSubject<IHotel | null>(null)
  constructor(private http: HttpClient) {
  }

  getHotels() {
    return this.http.get<HotelResponse>(`http://localhost:3001/hotels`).subscribe((res: HotelResponse) => {
      this.hotels$.next(res.items);
      this.selectedHotel$.next(res.items[0]);
    });
  }
}
