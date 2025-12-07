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
    </tr>
  );
});

export default MelesCard;
