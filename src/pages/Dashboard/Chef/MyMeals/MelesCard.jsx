import React, { memo } from "react";
import { IoMdStarHalf } from "react-icons/io";

const MelesCard = memo(({ meal, handleDeleteMeal, handleEditMeal }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={meal.foodImage} alt={meal.foodName} />
            </div>
          </div>
          <div></div>
        </div>
      </td>
      <td>{meal.foodName}</td>
      <td>${meal.price}</td>
      <td>
        <div className="flex items-center ">
          {meal.rating}{" "}
          <span className="text-yellow-500">
            <IoMdStarHalf />
          </span>
        </div>
      </td>
      <td className="text-center ">
        <div className="flex justify-center items-center gap-5 ">
          <button
            onClick={() => handleDeleteMeal(meal._id)}
            className="btn btn-error text-white"
          >
            Delete
          </button>
          <button
            onClick={() => handleEditMeal(meal._id)}
            className="btn btn-warning text-white"
          >
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
});

export default MelesCard;
