import React from "react";
import SwiperCore from "swiper";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/a11y";

SwiperCore.use([Autoplay]);

interface ICarousel {
  slides: React.ReactNode[];
}

const Carousel: React.FC<ICarousel> = ({ slides }) => {
  return (
    <div>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={100}
        className="h-full w-full"
        loop
        autoplay={{
          delay: 4000,
        }}
        pagination={{ clickable: true, el: ".swiper-custom-pagination" }}
      >
        {slides.map((slide: React.ReactNode, index) => {
          return <SwiperSlide key={index}>{slide}</SwiperSlide>;
        })}
      </Swiper>
      <div className="swiper-custom-pagination flex justify-center mt-6 gap-x-2" />
    </div>
  );
};

export default Carousel;
