import React, { memo } from "react";
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa";
import Select from "../../utils/Select";
import Input from "../../utils/Input";
import Button from "../../utils/Button";
import useFetch from "../../hooks/useFetch";
import Loader from "../../utils/Loader";
import { shortTimeAgo } from "../../utils/shortTimeAgo";
import ReviewForm from "./ReviewForm";

const Reviews = memo(({ foodId }) => {
  const { data, isLoading, isError, error } = useFetch({
    url: `/meals/reviews/${foodId}`,
    queryKey: ["reviews", foodId],
    enabled: !!foodId,
  });

  if (isLoading) return <Loader />;
  if (isError) return <p>{error}</p>;

  return (
    <div className="mt-14 bg-white rounded-2xl shadow-xl p-6 md:p-8">
      {/* Existing Reviews */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Customer Reviews</h2>

        {/* Arrows */}
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 flex items-center justify-center rounded-full border">
            <FaAngleLeft />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full border">
            <FaAngleRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 mb-10">
        {data?.reviews?.map((review, index) => (
          <div
            key={index}
            className="rounded-lg h-48 p-5 bg-gray-100 shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center justify-center gap-2">
                <img
                  className="h-8 w-8 rounded-full"
                  src={review?.reviewerImage}
                  alt=""
                />
                <h3 className="font-semibold text-gray-800">
                  {review.reviewerName}
                </h3>
              </div>
              <span className="flex items-center text-primary">
                <FaStar />{" "}
                <p className="ml-1 text-gray-700 font-medium">
                  {review.rating}
                </p>
              </span>
            </div>

            <p className="text-gray-600">{review.comment}</p>

            <p className="text-secondary text-sm mt-7">
              {shortTimeAgo(review.reviewDate)}
            </p>
          </div>
        ))}
      </div>

      {/* Add Review Form */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Add Your Review
        </h3>

        <ReviewForm foodId={foodId} />
      </div>
    </div>
  );
});

export default Reviews;
