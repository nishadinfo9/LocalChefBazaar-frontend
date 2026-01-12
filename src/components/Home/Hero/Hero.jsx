import React from "react";
import Button from "../../../utils/Button";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSolidShoppingBags } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Feature } from "./Feature";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-16">
       <div className="flex flex-col-reverse md:flex-row items-center gap-16 relative">

  {/* CONTENT */}
  <div className="flex-1 space-y-6 text-center md:text-left">
    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight text-accent">
      Healthy <span className="text-primary">Eating</span> Is{" "}
      <span className="text-neutral">Important</span> Part Of Life
    </h1>

    <p className="text-base sm:text-lg font-medium max-w-md mx-auto md:mx-0">
      We prepare delicious food for you and always care about your health.
    </p>

    <Link to="/">
      <Button
        bg="btn-primary"
        className="inline-flex items-center gap-2 px-8 py-3 text-lg"
      >
        Explore Now
        <FaChevronRight />
      </Button>
    </Link>
  </div>

  {/* IMAGE AREA */}
  <div className="flex-1 relative flex justify-center md:justify-end">

    {/* INFO CARD — BEHIND IMAGE */}
    <div
      className="
        hidden sm:block
        absolute bottom-5 lg:-left-1
        z-10
        bg-white/70 backdrop-blur
        border border-gray-200
        rounded-2xl
        p-5 space-y-4
        w-80
      "
    >
      <Feature
        icon={<TbTruckDelivery />}
        title="Fast Delivery"
        desc="Delivered within 30 minutes"
      />
      <Feature
        icon={<BiSolidShoppingBags />}
        title="Pick Up"
        desc="Pickup at your doorstep"
      />
    </div>

    {/* IMAGE — FRONT */}
    <div className="relative z-30">
      {/* OFFER BADGE */}
      <div className="absolute -top-6 right-6 z-40 flex h-24 w-24 items-center justify-center rounded-full bg-neutral text-xl font-bold">
        20% Off
      </div>

      <img
        src="/images/food1.png"
        alt="Healthy food"
        className="h-64 sm:h-80 lg:h-96 object-contain"
      />
    </div>

  </div>
</div>

      </div>
    </div>
  );
};

export default Hero;
