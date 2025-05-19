// components/molecules/TestimonialSlider.jsx
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { testimonials } from "../../lib/constants/testimonial";
import TestimonialCard from "./TestimonialCard";
import TestimonialControls from "./TestimonialControls";

const TestimonialSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {testimonials.map((testimonial, idx) => (
          <SwiperSlide key={idx}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>

      <TestimonialControls prevRef={prevRef} nextRef={nextRef} />
    </>
  );
};

export default TestimonialSlider;
