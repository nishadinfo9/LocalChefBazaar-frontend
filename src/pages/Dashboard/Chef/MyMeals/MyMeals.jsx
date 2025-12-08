import React from "react";
import useFetch from "../../../../hooks/useFetch";
import MelesCard from "./MelesCard";

const MyMeals = () => {
  const { data, isLoading, isError, error } = useFetch({
    url: "/meals/my-meals",
    queryKey: ["meals"],
  });

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
