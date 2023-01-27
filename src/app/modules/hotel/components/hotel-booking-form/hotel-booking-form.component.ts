import {Component} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IHotel} from "../../../../models/hotel.model";
import {HotelService} from "../../services/hotel.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-hotel-booking-form',
  templateUrl: './hotel-booking-form.component.html',
  styleUrls: ['./hotel-booking-form.component.scss'],
})
export class HotelBookingFormComponent {
  readonly selectedHotel$: BehaviorSubject<IHotel | null> = this.hotelService.selectedHotel$;

  constructor(
    private hotelService: HotelService,
    private modalRef: MatDialogRef<HotelBookingFormComponent>,
  ) {
  }

  closeModal() {
    this.modalRef.close()
  }
}
