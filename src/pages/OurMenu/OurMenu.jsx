import React, { useState } from "react";
import FoodCard from "../Home/FoodCard/FoodCard";
import useFetch from "../../hooks/useFetch";
import Loader from "../../utils/Loader";
import SortSelect from "./SortSelect";
import Pagination from "./Pagination";

const OurMenu = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [sortVal, setSortVal] = useState("");
  let limit = 10;

  const { data, isLoading, isError, error } = useFetch({
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
    <div>
      <title>Local Chef Bazaar - Meals</title>
      <div>
        <div className="flex items-center justify-between my-5">
          <h2 className="md:text-3xl text-3xl font-bold text-primary">
            All <span className="text-secondary">Meals</span>
          </h2>
          <div>
            <SortSelect sortVal={sortVal} sortHandler={sortHandler} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-center justify-between">
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

export default OurMenu;
