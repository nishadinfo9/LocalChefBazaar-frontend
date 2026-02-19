import React, { useState } from "react";
import MenuCard from "./MenuCard";
import Button from "../../utils/Button";
import Loader from "../../utils/Loader";
import useFetch from "../../hooks/useFetch";

const categories = [
  { id: 11, name: "All", slug: "all" },
  { id: 12, name: "Main Dish", slug: "main-dish" },
  { id: 13, name: "Fast Food", slug: "fast-food" },
  { id: 14, name: "Snacks", slug: "snacks" },
  { id: 15, name: "Healthy", slug: "healthy" },
  { id: 16, name: "Italian", slug: "italian" },
  { id: 17, name: "Dessert", slug: "dessert" },
  { id: 18, name: "Drinks", slug: "drinks" },
];

const Foods = () => {
  const [current, setCurrent] = useState("all");

  const { data, isLoading, isError, error } = useFetch({
    url: `/meals/all-meals?category=${current !== "all" ? current : ""}`,
    queryKey: ["meals", current],
    enabled: true,
    keepPreviousData: true,
    staleTime: 1000 * 60 * 3,
  });

  const meals = data?.meals || [];

  // Show loader while fetching
  if (isLoading) return <Loader />;

  return (
    <div>
      <h2 className="hidden md:block text-3xl font-bold text-primary my-5">
        Top <span className="text-secondary">Categories</span>
      </h2>

      <div className="hidden md:flex items-center justify-between">
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => setCurrent(category.slug)}
            className={`px-10 rounded-md border-none shadow-none ${
              category.slug === current
                ? "bg-primary text-white"
                : "bg-white text-black"
            }`}
          >
            {category.name}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10 my-5">
        {/* Show error if fetch failed */}
        {isError ? (
          <p className="text-center col-span-4 text-red-500">
            {error?.message || "Something went wrong"}
          </p>
        ) : meals.length === 0 ? (
          <p className="text-center col-span-4 text-gray-500">No meals found</p>
        ) : (
          meals.map((menu) => <MenuCard key={menu._id} menu={menu} />)
        )}
      </div>
    </div>
  );
};

export default Foods;
