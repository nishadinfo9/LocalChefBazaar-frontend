import React, { memo } from "react";
import { FaQuoteRight } from "react-icons/fa";

const ReviewCard = memo(({ reviewData }) => {
  const {
    comment = "",
    reviewerImage = "",
    reviewerName = "",
    rating = "",
  } = reviewData;

  return (
    <div className="card bg-gray-200 text-primary-content w-52 md:w-60 mx-auto rounded-2xl shadow-md p-4 flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <FaQuoteRight className="md:text-3xl text-secondary mt-1" />
        <p className="text-gray-900 text-xs md:text-sm">{comment}</p>
      </div>

      <div className="flex items-center gap-3 mt-2">
        <img
          className="md:w-10 md:h-10 w-7 h-7 rounded-full object-cover"
          src={reviewerImage || "/images/user.png"}
          alt="review-profile"
          loading="lazy"
        />
        <div className="flex flex-col">
          <h2 className="text-secondary text-5 md:text-sm font-normal md:font-semibold">
            {reviewerName}
          </h2>
          <p className="text-primary md:text-sm">{rating} ★</p>
        </div>
      </div>
    </div>
  );
});

export default ReviewCard;
