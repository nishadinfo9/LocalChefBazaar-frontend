import React from "react";
import FavoriteTable from "./FavoriteTable";
import useFetch from "../../../../hooks/useFetch";
import useAuth from "../../../../hooks/useAuth";
import Loader from "../../../../utils/Loader";
import useDelete from "../../../../hooks/useDelete";

const FavoriteMeals = () => {
  const { user } = useAuth();

  const { data, isLoading, isError, error, refetch } = useFetch({
    url: "/meal/favorite-meals",
    queryKey: ["favorites", user?.email],
  });

  const deleteFavorite = useDelete({
    invalidateQueries: [["favorites"]],
    message: "Deleted Favorite Food",
  });

  const deleteFavoriteFood = (favoriteId) => {
    deleteFavorite.mutate(
      { url: `/meal/delete-favorite-meals/${favoriteId}` },
      {
        onSuccess: () => {
          refetch();
        },
      }
    );
  };

  if (isLoading) return <Loader />;
  if (isError) return <p>{error}</p>;
  if (!data?.favorites?.length) return <p>No Favorite Meals Found</p>;

  return (
    <div className="p-6 min-h-screen bg-base-100">
      <h1 className="text-3xl font-bold mb-6">My Favorite Meals</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-left px-4">Meal</th>
              <th className="text-left">Chef</th>
              <th className="text-left">Price</th>
              <th className="text-left">Date Added</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.favorites?.map((item) => (
              <FavoriteTable
                key={item._id}
                deleteFavoriteFood={deleteFavoriteFood}
                item={item}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FavoriteMeals;
