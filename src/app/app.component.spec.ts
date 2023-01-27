import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HotelService} from "./modules/hotel/services/hotel.service";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import SpyObj = jasmine.SpyObj;

describe('AppComponent', () => {
  let hotelService: SpyObj<HotelService>;
  beforeEach(async () => {
    hotelService = jasmine.createSpyObj('HotelService', ['getHotels']);
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: HotelService, useValue: hotelService}],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
    fixture.detectChanges();
    expect(hotelService.getHotels).toHaveBeenCalled();
  });
});
