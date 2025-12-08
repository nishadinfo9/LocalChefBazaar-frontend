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
    <div className="card bg-gray-200 text-primary-content w-60 rounded-2xl shadow-md p-4 flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <FaQuoteRight className="text-3xl text-secondary mt-1" />
        <p className="text-gray-900 text-sm">{comment}</p>
      </div>

      <div className="flex items-center gap-3 mt-2">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={reviewerImage || "/images/user.png"}
          alt="review-profile"
          loading="lazy"
        />
        <div className="flex flex-col">
          <h2 className="text-secondary text-sm font-semibold">
            {reviewerName}
          </h2>
          <p className="text-primary text-sm">{rating} ★</p>
        </div>
      </div>
    </div>
  );
});

export default ReviewCard;
