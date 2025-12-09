import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ item }) => {
  return (
    <div key={item.id} className="card bg-white shadow-2xl p-5">
      <div className="flex items-center gap-3">
        <img
          src={item.reviewerImage || "/images/user.png"}
          alt={item.reviewerName}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold">{item.reviewerName}</h3>
          <p className="text-xs text-gray-500">{item.reviewDate}</p>
        </div>
      </div>

      <div className="flex items-center gap-1 mt-3">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`w-5 h-5 ${
              i < item.rating ? "text-yellow-400" : "text-gray-400"
            }`}
          />
        ))}
      </div>

      <p className="mt-3 text-sm text-gray-700">{item.comment}</p>
    </div>
  );
};

export default ReviewCard;
