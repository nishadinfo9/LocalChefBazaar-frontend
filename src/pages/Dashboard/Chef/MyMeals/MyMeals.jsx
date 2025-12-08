import React from "react";
import useFetch from "../../../../hooks/useFetch";
import MelesCard from "./MelesCard";
import Loader from "../../../../utils/Loader";

const MyMeals = () => {
  const { data, isLoading, isError, error } = useFetch({
    url: "/meals/my-meals",
    queryKey: ["meals"],
  });

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <p className="text-red-500">{error?.message || "Failed to load meals"}</p>
    );
  if (!data?.meals?.length) return <p>No meals found.</p>;

  return (
    <div>
      <title>Local Chef Bazaar - My Meals</title>
      <h2>My Meals</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Photo</th>
              <th>Food Name</th>
              <th>Price</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {data?.meals?.map((meal) => (
              <MelesCard key={meal._id} meal={meal} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyMeals;
