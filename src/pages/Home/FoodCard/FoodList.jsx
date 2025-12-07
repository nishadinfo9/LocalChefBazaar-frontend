import React from "react";
import FoodCard from "./FoodCard";
import useFetch from "../../../hooks/useFetch";
import Loader from "../../../utils/Loader";

const FoodList = () => {
  const { data, isLoading, isError, error } = useFetch({
    url: "/meals/all-meals?limit=6",
    queryKey: ["meals"],
  });

  if (isLoading) return <Loader />;
  if (isError) return <p>{error.message}</p>;

  return (
    <div className="my-20">
      <h2 className="md:text-5xl text-4xl pl-5 font-bold my-20 text-secondary">
        LATEST MEALS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
        {data?.meals?.map((meal) => (
          <FoodCard key={meal._id} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
