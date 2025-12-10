import React, { useState } from "react";
import FoodCard from "../Home/FoodCard/FoodCard";
import useFetch from "../../hooks/useFetch";
import Loader from "../../utils/Loader";
import SortSelect from "./SortSelect";

const Meals = () => {
  const [sortVal, setSortVal] = useState("");
  const { data, isLoading, isError, error } = useFetch({
    url: `/meals/all-meals?order=${sortVal}`,
    queryKey: ["meals", sortVal],
  });

  const sortHandler = (value) => {
    setSortVal(value);
  };

  if (isLoading) return <Loader />;
  if (isError) return <p>{error}</p>;

  return (
    <div className="my-10">
      <title>Local Chef Bazaar - Meals</title>
      <div>
        <h2 className="md:text-5xl text-4xl md:pl-0 pl-5 font-bold my-10 text-secondary">
          All Meals
        </h2>
        <div className="justify-self-end my-5">
          <SortSelect sortVal={sortVal} sortHandler={sortHandler} />
        </div>
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
