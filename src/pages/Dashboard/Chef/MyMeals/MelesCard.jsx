import React, { memo } from "react";

const MelesCard = memo(({ meal }) => {
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
      <td>{meal.price}</td>
      <td>{meal.rating}</td>
      <td className="text-center ">
        <div className="flex justify-center items-center gap-5 ">
          <button className="btn btn-error text-white">Delete</button>
          <button className="btn btn-warning text-white">Edit</button>
        </div>
      </td>
    </tr>
  );
});

export default MelesCard;
