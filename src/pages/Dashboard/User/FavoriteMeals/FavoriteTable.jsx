import React from "react";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { shortTimeAgo } from "../../../../utils/shortTimeAgo";

const FavoriteTable = ({ item, deleteFavoriteFood }) => {
  return (
    <tr
      key={item._id}
      className="hover:bg-secondary/50 transition-all duration-200"
    >
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={item.foodImage} alt={item.chefName} />
            </div>
          </div>
        </div>
      </td>
      <td>{item.chefName}</td>
      <td>${item.price}</td>
      <td>{shortTimeAgo(item.createdAt)}</td>
      <td className="px-4">
        <div className="flex justify-center gap-5">
          <button
            onClick={() => deleteFavoriteFood(item._id)}
            className="btn btn-sm btn-error text-white"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default FavoriteTable;
