import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HotelCardComponent } from './hotel-card.component';
import {HotelService} from "../../services/hotel.service";
import {IAddress} from "../../../../models/hotel.model";

describe('HotelCardComponent', () => {
  let component: HotelCardComponent;
  let fixture: ComponentFixture<HotelCardComponent>;

  beforeEach(async () => {
    const hotelService = jasmine.createSpyObj('HotelService', ['bookHotel']);
    await TestBed.configureTestingModule({
      declarations: [ HotelCardComponent ],
      providers: [{ provide: HotelService, useValue: hotelService  }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelCardComponent);
    component = fixture.componentInstance;
    component.hotel = {
      title: 'Hotel',
      address: {} as unknown as IAddress,
      distance: 100,
      position: {lat: 0, lng: 0}
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
