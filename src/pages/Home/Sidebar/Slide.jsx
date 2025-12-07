import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { memo } from "react";

const images = [
  "/images/one.jpg",
  "/images/two.jpg",
  "/images/three.jpg",
  "/images/four.jpg",
  "/images/five.jpg",
  "/images/six.jpg",
];

const Slide = memo(() => {
  return (
    <div className="w-full max-w-7xl mx-auto overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="rounded-xl"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`Slide ${i + 1}`}
              className="w-full h-64 md:h-96 object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});

export default Slide;
