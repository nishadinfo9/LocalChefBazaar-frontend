import React from "react";
import FoodCard from "./FoodCard";
import useFetch from "../../../hooks/useFetch";
import Loader from "../../../utils/Loader";

const FoodList = () => {
  const { data, isLoading, isError, refetch, error } = useFetch({
    url: "/meals/all-meals?limit=6",
    queryKey: ["meals"],
  });

  if (isLoading) return <Loader />;

  if (isError)
    return (
      <div className="text-center mt-10">
        <p className="text-red-500 mb-2">
          {error?.response?.data?.message ||
            error?.message ||
            "Something went wrong"}
        </p>
        <button
          onClick={() => refetch()}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Retry
        </button>
      </div>
    );

  if (!data?.meals?.length)
    return <p className="text-center mt-10">Meal Not Found</p>;

  return (
    <div className="md:my-20 md:max-w-6xl">
      <h2 className="md:text-5xl text-4xl pl-5 font-bold md:my-20 my-10 text-secondary">
        LATEST MEALS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-15">
        {data.meals.map((meal) => (
          <FoodCard key={meal._id} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
