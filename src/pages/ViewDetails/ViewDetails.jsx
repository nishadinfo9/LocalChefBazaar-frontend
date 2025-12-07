import React from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loader from "../../utils/Loader";
import Reviews from "./Reviews";

const ViewDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useFetch({
    url: `/meals/single-meal/${id}`,
    queryKey: ["meals"],
  });

  const meals = data?.meal || {};

  const {
    foodName,
    chefName,
    foodImage,
    price,
    rating,
    ingredients,
    deliveryTime,
    chefExperience,
  } = meals;

  if (isLoading) return <Loader />;
  if (isError) return <p>{error}</p>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">{foodName}</h1>

      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
        <div className="w-full h-64 md:h-96 overflow-hidden rounded-xl mb-8">
          <img
            src={foodImage}
            alt={"image"}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-lg">
              <span className="font-semibold text-gray-700">Chef Name: </span>
              {chefName}
            </p>
            <p className="text-lg">
              <span className="font-semibold text-gray-700">Price: </span>
              <span className="text-secondary font-bold">{price} ৳</span>
            </p>
            <p className="text-lg flex items-center gap-2">
              <span className="font-semibold text-gray-700">Rating:</span>
              <span className="flex items-center gap-1 text-primary">
                <FaStar /> {rating}
              </span>
            </p>

            <p className="text-lg">
              <span className="font-semibold text-gray-700">
                Delivery Area:
              </span>{" "}
              {"All area"}
            </p>
          </div>

          {/* Right */}
          <div className="space-y-4">
            <p className="text-lg">
              <span className="font-semibold text-gray-700">
                Estimated Delivery:
              </span>{" "}
              {deliveryTime} mins
            </p>
            <p className="text-lg">
              <span className="font-semibold text-gray-700">
                Chef Experience:
              </span>{" "}
              {chefExperience} years
            </p>

            <div>
              <p className="font-semibold text-gray-700 text-lg mb-2">
                Ingredients:
              </p>
              <ul className="list-disc ml-6 text-gray-600">
                {ingredients?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <button className="px-8 py-3 cursor-pointer bg-secondary text-white font-semibold rounded-full shadow-lg hover:bg-secondary/90 transition">
            Order Now
          </button>
        </div>
      </div>
      <Reviews foodId={id} />
    </div>
  );
};

export default ViewDetails;
