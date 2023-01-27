import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IHotel} from "../../../../models/hotel.model";
import {HotelService} from "../../services/hotel.service";
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {IBookForm} from "../../models/book-form.model";

@Component({
  selector: 'app-hotel-booking-form',
  templateUrl: './hotel-booking-form.component.html',
  styleUrls: ['./hotel-booking-form.component.scss'],
})
export class HotelBookingFormComponent implements OnInit{
  readonly selectedHotel$: BehaviorSubject<IHotel | null> = this.hotelService.selectedHotel$;
  hotelBookingForm: FormGroup<IBookForm>;
  isBookingComplete: boolean = false;
  isLoading: boolean = false;

  constructor(
    private hotelService: HotelService,
    private modalRef: MatDialogRef<HotelBookingFormComponent>,
    private formBuilder: FormBuilder,
  ) {
  }
  ngOnInit(): void {
    this.initForm();
  }
  closeModal() {
    this.modalRef.close()
  }

  private initForm(): void {
    this.hotelBookingForm = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
  onBookingSubmit(): void {
    if (!this.hotelBookingForm.valid) {
      return;
    }
    this.isLoading = true;

    setTimeout(() => {
      this.isBookingComplete = true;
      this.isLoading = false;

      setTimeout(() => {
        this.closeModal()
      }, 2000)
    }, 2000);
  }
}
