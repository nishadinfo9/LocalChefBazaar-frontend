import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FoodCard } from "./FoodCard";
import Button from "../../../utils/Button";

export const FoodSlider = () => {
  return (
    <div className="w-full bg-[#FCEEDD] py-16 md:py-24 flex justify-center">
      <div className="relative w-full max-w-7xl px-4 md:px-0">
        <div
          className="
        bg-white
        rounded-3xl md:rounded-[100px]
        px-6 md:px-20
        pt-12 md:pt-20
        pb-10
        shadow-lg

        flex md:items-center md:justify-center
        gap-6 md:gap-10

        overflow-x-auto md:overflow-visible
        snap-x snap-mandatory
        scrollbar-hide
      "
        >
          <div className="min-w-[220px] snap-center md:min-w-0">
            <FoodCard color="bg-red-400" title="Berries Salad" price="$5.00" />
          </div>

          <div className="min-w-[220px] snap-center md:min-w-0">
            <FoodCard
              color="bg-orange-400"
              title="Healthy Salad"
              price="$3.00"
            />
          </div>

          <div className="min-w-[220px] snap-center md:min-w-0">
            <FoodCard
              color="bg-green-400"
              title="Berries Salad"
              price="$4.00"
            />
          </div>

          <div className="min-w-[220px] snap-center md:min-w-0">
            <FoodCard
              color="bg-indigo-400"
              title="Healthy Salad"
              price="$5.00"
            />
          </div>
        </div>

        <div
          className="
        hidden md:flex
        absolute -left-10 top-1/2 -translate-y-1/2
        w-32 h-32 bg-[#FCEEDD] rounded-full
        items-center justify-center
      "
        >
          <Button
            bg="bg-white"
            className="w-14 h-14 rounded-full shadow-md text-2xl"
          >
            <FaAngleLeft />
          </Button>
        </div>

        <div
          className="
        hidden md:flex
        absolute -right-10 top-1/2 -translate-y-1/2
        w-32 h-32 bg-[#FCEEDD] rounded-full
        items-center justify-center
      "
        >
          <Button
            bg="bg-white"
            className="w-14 h-14 rounded-full shadow-md text-2xl"
          >
            <FaAngleRight />
          </Button>
        </div>
      </div>
    </div>
  );
};
