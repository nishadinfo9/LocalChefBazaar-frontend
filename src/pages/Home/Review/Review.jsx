import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";
import useFetch from "../../../hooks/useFetch";
import Loader from "../../../utils/Loader";

const Review = () => {
  const { data, isLoading, isError, refetch, error } = useFetch({
    url: "/meals/all-reviews",
    queryKey: ["reviews"],
  });

  const slides = useMemo(() => {
    return data?.reviews?.map((reviewData) => (
      <SwiperSlide key={reviewData.id}>
        <ReviewCard reviewData={reviewData} />
      </SwiperSlide>
    ));
  }, [data?.reviews]);

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <div className="text-center mt-10">
        <p className="text-red-500 mb-2">
          {error?.response?.data?.message ||
            error?.message ||
            "Something went wrong"}
        </p>
        <button
          onClick={() => refetch()}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Retry
        </button>
      </div>
    );

     if (!data?.reviews?.length)
    return <p className="text-center mt-10">Meal Not Found</p>;


  return (
    <div className="my-10 md:mt-30">
      <div className="flex flex-col items-center justify-center gap-5 my-10 ">
        <h3 className="text-5xl text-center font-bold text-secondary">
          Review
        </h3>
        <p className="md:w-3xl text-center text-xs md:text-lg">
          Discover a world of fresh, delicious, and high-quality foods at Food
          Bazar. From farm-fresh vegetables to tasty snacks, we bring
          convenience, flavor, and happiness to your table every day!
        </p>
      </div>
      <Swiper
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: "50%",
          depth: 200,
          modifier: 0.75,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <div className="grid md:grid-cols-5 ">{slides}</div>
      </Swiper>
    </div>
  );
};

export default Review;
