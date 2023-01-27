import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSwiperComponent } from './hotel-swiper.component';

describe('HotelSwiperComponent', () => {
  let component: HotelSwiperComponent;
  let fixture: ComponentFixture<HotelSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelSwiperComponent ]
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
