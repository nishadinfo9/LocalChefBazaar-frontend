import React from "react";
import Button from "../../../utils/Button";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSolidShoppingBags } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Feature } from "./Feature";

const Hero = () => {
  return (
    <div className="min-h-screen md:w-6xl flex items-center">
      <div className="container mx-auto px-4 md:px-16">
        <div className="flex flex-col-reverse md:flex-row items-center gap-16 relative">
          {/* CONTENT */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary">
              Better Your Life <span className="text-secondary">Today</span>
            </h1>

            <p className="text-gray-700 sm:text-lg font-medium max-w-md mx-auto md:mx-0">
              We prepare delicious food for you and always care about your
              health.
            </p>

            <Link to="/">
              <Button
                bg="btn-outline border-2 border-primary text-primary hover:text-white hover:btn-primary"
                className="inline-flex items-center gap-2 px-8 py-3 text-lg transition-all ease-in"
              >
                Start Today
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
              <div className="absolute -top-6 right-6 z-40 flex h-24 w-24 items-center justify-center rounded-full bg-secondary text-white border-primary border-2 border-dotted text-xl font-semibold">
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
