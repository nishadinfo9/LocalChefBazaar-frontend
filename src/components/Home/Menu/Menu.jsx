import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FoodCard } from "./FoodCard";
import Button from "../../../utils/Button";

export const FoodSlider = () => {
  return (
    <div className="w-full bg-[#FCEEDD] py-24 flex justify-center">
      <div className="relative w-full">
        <div className="bg-white rounded-[100px] px-30 pt-20 pb-10 flex gap-10  shadow-lg">
          <FoodCard color="bg-red-400" title="Berries Salad" price="$5.00" />
          <FoodCard color="bg-orange-400" title="Healthy Salad" price="$3.00" />
          <FoodCard color="bg-green-400" title="Berries Salad" price="$4.00" />
          <FoodCard color="bg-indigo-400" title="Healthy Salad" price="$5.00" />
        </div>

        {/* LEFT CUT */}
        <div
          className="absolute -left-10 top-1/2 -translate-y-1/2 
          w-32 h-32 bg-[#FCEEDD] rounded-full flex items-center justify-center"
        >
          <Button
            bg="bg-white"
            className="w-14 h-14 rounded-full 
            shadow-md text-2xl"
          >
            <FaAngleLeft />
          </Button>
        </div>

        {/* RIGHT CUT */}
        <div
          className="absolute -right-10 top-1/2 -translate-y-1/2
          w-32 h-32 bg-[#FCEEDD] rounded-full flex items-center justify-center"
        >
          <Button
            bg="bg-white"
            className="w-14 h-14 rounded-full 
            shadow-md text-2xl"
          >
            <FaAngleRight />
          </Button>
        </div>
      </div>
    </div>
  );
};
