import React from "react";
import useFetch from "../../../../hooks/useFetch";

const MyMeals = () => {
  const { data, isLoading, isError, error } = useFetch({
    url: "/meals/my-meals",
    queryKey: ["meals"],
  });

  return (
    <div>
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
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={meal.foodImage} alt={meal.foodName} />
                      </div>
                    </div>
                    <div></div>
                  </div>
                </td>
                <td>{meal.foodName}</td>
                <td>{meal.price}</td>
                <td>{meal.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyMeals;
