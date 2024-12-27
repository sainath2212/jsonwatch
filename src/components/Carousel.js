"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const Carousel = ({ images, centralDial }) => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Central Watch Dial */}
      <div className="absolute z-10 pointer-events-none">
        <img
          src={centralDial}
          alt="Central Watch Dial"
          className="w-[24rem] h-[24rem]"
        />
      </div>

      <Swiper
        modules={[EffectCoverflow, Mousewheel]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3.5} // Fractional value to maintain surrounding images
        mousewheel={true} // Enable mouse wheel interaction
        coverflowEffect={{
          rotate: 0,
          stretch: 30, // Reduce stretch to keep images proportional
          depth: 100, // Reduce depth for a more natural appearance
          modifier: 1,
          slideShadows: false,
        }}
        style={{ width: "100%", padding: "60px 0" }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} style={{ width: "200px" }}>
            <img
              src={image}
              alt={`Case ${index}`}
              className="w-full h-auto object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
