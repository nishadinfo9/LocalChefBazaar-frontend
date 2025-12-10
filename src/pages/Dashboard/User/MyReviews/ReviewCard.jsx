import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const ReviewCard = ({ item, handleReviewDelete, handleReviewEdit }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div key={item.id} className="card bg-white shadow-2xl p-5 relative">
      <button
        onClick={() => setOpenMenu((prev) => !prev)}
        className="absolute right-2 top-3 cursor-pointer"
      >
        <BsThreeDotsVertical />
      </button>

      {openMenu && (
        <div className="absolute right-2 top-10 bg-white shadow-md rounded-md w-28 z-20">
          <button
            onClick={() => {
              handleReviewEdit(item);
              setOpenMenu(false);
            }}
            className="w-full text-left px-3 py-2 hover:bg-gray-100 cursor-pointer"
          >
            Edit
          </button>

          <button
            onClick={() => {
              handleReviewDelete(item?._id);
              setOpenMenu(false);
            }}
            className="w-full text-left px-3 py-2 text-red-500 hover:bg-gray-100 cursor-pointer"
          >
            Delete
          </button>
        </div>
      )}

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
