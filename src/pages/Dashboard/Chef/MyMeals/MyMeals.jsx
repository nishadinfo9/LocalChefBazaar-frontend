import React from "react";
import useFetch from "../../../../hooks/useFetch";
import MelesCard from "./MelesCard";
import Loader from "../../../../utils/Loader";
import useDelete from "../../../../hooks/useDelete";
import { useNavigate } from "react-router-dom";

const MyMeals = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError, error, refetch } = useFetch({
    url: "/meals/my-meals",
    queryKey: ["my-meals"],
  });

  const deleteMeal = useDelete({ invalidateQueries: [["my-meals"]] });

  const handleDeleteMeal = (mealId) => {
    deleteMeal.mutate(
      { url: `/meals/delete-meals/${mealId}` },
      {
        onSuccess: () => {
          refetch();
        },
      }
    );
  };
  const handleEditMeal = (mealId) => {
    navigate(`/dashboard/create-meal?mealId=${mealId}`);
  };

  if (isLoading) return <Loader />;
  if (isError) return <p>{error.message || "Failed to load meals"}</p>;
  if (!data?.meals?.length) return <p>No meals found.</p>;

  return (
    <div>
      <title>Local Chef Bazaar - My Meals</title>
      <h1 className="text-3xl font-bold mb-6">My Meals</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Photo</th>
              <th>Food Name</th>
              <th>Price</th>
              <th>Rating</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.meals?.map((meal) => (
              <MelesCard
                handleDeleteMeal={handleDeleteMeal}
                handleEditMeal={handleEditMeal}
                key={meal._id}
                meal={meal}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyMeals;
