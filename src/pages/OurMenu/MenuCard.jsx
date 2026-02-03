import React from "react";
import { Link } from "react-router-dom";

const MenuCard = ({ menu }) => {
  const { name, image, description, category } = menu;
  return (
    <div className="card w-64 bg-white mx-auto shadow-2xl p-5 flex flex-col">
      {/* Image */}
      <figure className="h-40 w-full overflow-hidden rounded-xl">
        <img className="w-full h-full object-cover" src={image} alt="food" />
      </figure>

      {/* Card Body */}
      <div className="p-0 mt-2 flex flex-col">
        {/* Title and Rating */}
        <div className="flex items-center justify-between">
          <h2 className="card-title text-md font-medium">
            {name.slice(0, 20)}
            {name.length > 20 && "..."}
          </h2>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600">
          {description.slice(0, 25)}
          {description.length > 25 && "..."}
        </p>

        {/* Category */}
        <div className="flex justify-between gap-5 mt-2">
          <div className="text-sm font-semibold flex items-center gap-2">
            Category:
            <p>{category}</p>
          </div>
          <Link
            to={``}
            className="h-8 w-8 flex items-center font-bold justify-center border-2 border-primary  hover:bg-primary hover:text-white transition-colors ease-in-out text-primary  rounded-3xl"
          >
            +
          </Link>
        </div>

        {/* Button */}
      </div>
    </div>
  );
};

export default MenuCard;
