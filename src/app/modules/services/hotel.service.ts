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
  constructor(private http: HttpClient) {
  }

  getHotels() {
    return this.http.get<HotelResponse>(`http://localhost:3001/hotels`).subscribe((res: HotelResponse) => {
      this.hotels$.next(res.items);
    });
  }
}
