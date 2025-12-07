import React, { memo } from "react";
import { FaStar } from "react-icons/fa";

const MealInfo = memo(
  ({ chefName, price, rating, deliveryTime, chefExperience }) => {
    return (
      <div className="space-y-4">
        <p className="text-lg">
          <span className="font-semibold">Chef Name:</span> {chefName}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Price:</span>{" "}
          <span className="text-secondary font-bold">{price} ৳</span>
        </p>
        <p className="text-lg flex items-center gap-2">
          <span className="font-semibold">Rating:</span>
          <span className="flex items-center gap-1 text-primary">
            <FaStar /> {rating}
          </span>
        </p>
        <p className="text-lg">
          <span className="font-semibold">Delivery Time:</span> {deliveryTime}{" "}
          mins
        </p>
        <p className="text-lg">
          <span className="font-semibold">Chef Experience:</span>{" "}
          {chefExperience} years
        </p>
      </div>
    );
  }
);

export default MealInfo;
