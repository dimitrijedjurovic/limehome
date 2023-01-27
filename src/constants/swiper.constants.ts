import {SwiperOptions} from "swiper/types";

export const swiperBreakpoints: {
  [width: number]: SwiperOptions;
  [ratio: string]: SwiperOptions;
} = {
  320: {
    slidesPerView: 1.2,
  },
  640: {
    slidesPerView: 2.2,
  },
  900: {
    slidesPerView: 3.2,
  },
  1200: {
    slidesPerView: 4.2,
  }
}
