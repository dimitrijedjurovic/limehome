import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HotelSwiperComponent } from './hotel-swiper.component';
import {HotelService} from "../../services/hotel.service";
import {BehaviorSubject} from "rxjs";
import {IHotel} from "../../../../models/hotel.model";

describe('HotelSwiperComponent', () => {
  let component: HotelSwiperComponent;
  let fixture: ComponentFixture<HotelSwiperComponent>;

  beforeEach(async () => {
    const hotelService = jasmine.createSpyObj('HotelService', ['selectHotelByIndex', 'selectHotel']);
    hotelService.selectedHotel$ = new BehaviorSubject<IHotel | null>(null);
    hotelService.hotels$ = new BehaviorSubject<IHotel[]>([]);
    await TestBed.configureTestingModule({
      declarations: [ HotelSwiperComponent ],
      providers: [{provide: HotelService, useValue: hotelService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
