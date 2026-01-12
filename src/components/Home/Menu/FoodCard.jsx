import { Link } from "react-router-dom";
import Button from "../../../utils/Button";
import { FaHeart } from "react-icons/fa";

export const FoodCard = ({ color, title, price }) => {
  return (
    <div className={`${color} w-full rounded-3xl p-6 text-white relative pt-20`}>
      {/* FOOD IMAGE */}
      <div className="absolute -top-14 left-1/2 -translate-x-1/2">
        <img
          src="/images/food1.png"
          alt={title}
          className="w-28 h-28 object-cover rounded-full shadow-lg"
        />
      </div>

      <h3 className="text-2xl font-semibold text-center">{title}</h3>
      <div className="flex mt-5 items-center justify-between">
        <p className="text-xl font-bold text-center mt-1">{price}</p>
        <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center">
          <FaHeart className="text-red-500" />
        </div>
      </div>

      <Link to={"/"}>
        <button
          className="mt-4 mx-auto block bg-white text-black
        px-4 py-1 rounded-full text-sm font-medium cursor-pointer"
        >
          Order Now
        </button>
      </Link>
    </div>
  );
};
