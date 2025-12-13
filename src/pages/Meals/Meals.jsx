import React, { useState } from "react";
import FoodCard from "../Home/FoodCard/FoodCard";
import useFetch from "../../hooks/useFetch";
import Loader from "../../utils/Loader";
import SortSelect from "./SortSelect";
import Pagination from "./Pagination";

const Meals = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [sortVal, setSortVal] = useState("");
  let limit = 2;

  const { data, isLoading, isError, error, refetch } = useFetch({
    url: `/meals/all-meals?limit=${limit}&skip=${
      currentPage * limit
    }&order=${sortVal}`,
    queryKey: ["meals", sortVal, currentPage],
    enabled: true,
    keepPreviousData: true,
    staleTime: 1000 * 60 * 3,
  });

  const sortHandler = (value) => {
    setSortVal(value);
    setCurrentPage(0);
  };

  if (isLoading) return <Loader />;
  if (isError) return <p>{error}</p>;

  const totalCount = data?.total || 0;
  const meals = data?.meals || [];
  const totalPage = Math.ceil(totalCount / limit);

  return (
    <div className="my-10">
      <title>Local Chef Bazaar - Meals</title>
      <div>
        <h2 className="md:text-5xl text-4xl md:pl-0 pl-5 font-bold my-10 text-secondary">
          All Meals
        </h2>
        <div className="justify-self-end md:mr-0 mr-10 my-5">
          <SortSelect sortVal={sortVal} sortHandler={sortHandler} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
          {meals?.map((meal) => (
            <FoodCard key={meal._id} meal={meal} />
          ))}
        </div>
      </div>
      <div>
        <Pagination
          totalPage={totalPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Meals;
