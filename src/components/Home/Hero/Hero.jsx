import React from "react";
import Button from "../../../utils/Button";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSolidShoppingBags } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex items-center justify-between h-screen">
      <div className="flex-1 space-y-5 ">
        <h2 className="text-7xl leading-20 font-semibold text-accent">
          Healthy <span className="text-primary">Eating</span> Is{" "}
          <span className="text-neutral">Important</span> Part Of Life
        </h2>
        <p className="text-lg font-medium w-2xs">
          We are prepare dilisious food for you we are always
        </p>
        <Link to={"/"}>
          <Button bg="btn-primary" className="w-44 text-lg">
            <p>Explore Now</p>
            <FaChevronRight />
          </Button>
        </Link>
      </div>

      <div className="flex-1 relative flex justify-end items-center">
        <div className="relative z-50 flex items-center justify-center">
          <p className="absolute right-0 top-5 h-30 w-30 flex items-center justify-center rounded-full bg-neutral text-center">
            <p className="font-bold text-4xl">20% Off</p>
          </p>
          <img className="h-96 " src="/images/food1.png" alt="food" />
        </div>
        <div className="z-40 absolute top-35 right-55 bg-white/50 border border-gray-200 p-5 space-y-5 w-xs rounded-2xl">
          <div>
            <div className="flex items-center gap-2 text-xl font-semibold">
              <TbTruckDelivery />
              <h3>Fast Dlivery</h3>
            </div>
            <p className="w-40 text-md">Promise To Deliver Within 30 Minutes</p>
          </div>
          <div className="">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <BiSolidShoppingBags />
              <h3>Pick up</h3>
            </div>
            <p className="w-40 text-md">Pickup Delivery at your doorstep</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
