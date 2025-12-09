import React from "react";
import { FaRegEdit, FaTrash } from "react-icons/fa";

const FavoriteTable = ({ item }) => {
  return (
    <tr
      key={item.id}
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
      <td>{item.price}</td>
      <td>{item.createdAt}</td>
      <td className="px-4">
        <div className="flex justify-center gap-5">
          <button className="btn btn-error text-white">Delete</button>
          <button className="btn btn-warning text-white">Edit</button>
        </div>
      </td>
    </tr>
  );
};

export default FavoriteTable;
