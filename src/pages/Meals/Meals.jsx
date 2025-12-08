import React from "react";
import FoodCard from "../Home/FoodCard/FoodCard";
import FoodList from "../Home/FoodCard/FoodList";
import useFetch from "../../hooks/useFetch";
import Loader from "../../utils/Loader";

const Meals = () => {
  const { data, isLoading, isError, error } = useFetch({
    url: "/meals/all-meals",
    queryKey: ["meals"],
  });

  if (isLoading) return <Loader />;
  if (isError) return <p>{error}</p>;

  return (
    <div className="my-10">
      <title>Local Chef Bazaar - Meals</title>
      <div>
        <h2 className="md:text-5xl text-4xl md:pl-0 pl-5 font-bold my-10 text-secondary">
          All Meals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
          {data?.meals?.map((meal) => (
            <FoodCard key={meal._id} meal={meal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meals;
