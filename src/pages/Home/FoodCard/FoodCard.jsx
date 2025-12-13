import React, { memo } from "react";
import { Link } from "react-router-dom";

const FoodCard = memo(({ meal }) => {
  const { rating, price, foodImage, _id, chefName } = meal;
  return (
    <div className="card bg-white mx-auto w-96 shadow-2xl p-5 flex flex-col">
      {/* Image */}
      <figure className="h-56 w-full overflow-hidden rounded-xl">
        <img
          className="w-full h-full object-cover"
          src={foodImage}
          alt="food"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body p-0 mt-4 flex flex-col gap-3">
        {/* Title and Rating */}
        <div className="relative">
          <h2 className="card-title text-lg font-semibold pr-12">{chefName}</h2>
          <div className="absolute top-0 right-0 badge badge-outline text-primary">
            {rating} ★
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600">
          A card component has a figure, a body part, and inside body there are
          title and actions parts.
        </p>

        {/* Price */}
        <div className="flex justify-between gap-5">
          <div className="badge badge-outline text-secondary">
            Price ${price}
          </div>
          <Link
            to={`/meals/${_id}`}
            className="w-40 text-center bg-secondary hover:bg-green-600 text-white  py-1 rounded-xl"
          >
            See Details
          </Link>
        </div>

        {/* Button */}
      </div>
    </div>
  );
});

export default FoodCard;
