import React, { memo } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const FoodCard = memo(({ meal }) => {
  const description =
    " A card component has a figure, a body part, and inside body there are title and actions parts.";
  const { rating, price, foodImage, _id, foodName } = meal;
  return (
    <div className="card bg-white mx-auto  shadow-2xl p-5 flex flex-col">
      {/* Image */}
      <figure className="h-40 w-full overflow-hidden rounded-xl">
        <img
          className="w-full h-full object-cover"
          src={foodImage}
          alt="food"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body p-0 mt-4 flex flex-col gap-3">
        {/* Title and Rating */}
        <div className="flex items-center justify-between">
          <h2 className="card-title text-lg font-semibold pr-12">
            {foodName.slice(0, 20)}
            {foodName.length > 20 && "..."}
          </h2>
          <div className=" text-yellow-400 flex items-center">
            <h3 className="text-xl font-semibold">{rating}</h3>
            {rating < 5 ? <FaStarHalfAlt size={25} /> : <FaStar size={25} />}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600">
          {description.slice(0, 60)}
          {description.length > 60 && "..."}
        </p>

        {/* Price */}
        <div className="flex justify-between gap-5">
          <div className="  text-xl font-semibold flex items-center gap-2">
            <p className="text-green-600"> ${price}</p>
          </div>
          <Link
            to={`/meals/${_id}`}
            className="w-32 text-center font-medium border-2 border-primary  hover:bg-primary hover:text-white transition-colors ease-in-out text-primary  py-1 rounded-3xl"
          >
            View Details
          </Link>
        </div>

        {/* Button */}
      </div>
    </div>
  );
});

export default FoodCard;
