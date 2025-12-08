import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loader from "../../utils/Loader";
import Reviews from "./Reviews";
import Button from "../../utils/Button";
import usePost from "../../hooks/usePost";
import MealInfo from "./MealInfo";
import Ingredients from "./Ingredients";

const ViewDetails = () => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const { id } = useParams();
  const { data, isLoading, isError, error } = useFetch({
    url: `/meals/single-meal/${id}`,
    queryKey: ["meals", id],
  });
  const meals = useMemo(() => data?.meal || {}, [data]);

  const {
    foodName = "",
    chefName = "",
    foodImage = "",
    price = 0,
    rating = 0,
    ingredients = [],
    deliveryTime = "",
    chefExperience = "",
  } = meals;

  //Favorite
  const { data: favoriteData = {}, refetch } = useFetch({
    url: `/meal/get-favorite-meal/${id}`,
    queryKey: ["favorites", id],
  });

  // Initialize favorite state
  useEffect(() => {
    if (favoriteData.favorited !== undefined) {
      setIsFavorite(favoriteData.favorited);
    }
  }, [favoriteData]);

  const addFavorite = usePost({
    url: `/meal/add-favorite-meal/${id}`,
    // invalidateQueries: [["favorites", id]],
  });

  const addFavoriteMealHandler = useCallback(() => {
    addFavorite.mutate(
      {},
      {
        onSuccess: (res) => {
          setIsFavorite(res.favorited);
        },
      }
    );
  }, [addFavorite]);

  console.log(isFavorite);

  if (isLoading) return <Loader />;
  if (isError) return <p>{error}</p>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">{foodName}</h1>

      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
        <div className="w-full h-64 md:h-96 overflow-hidden rounded-xl mb-8">
          <img
            src={foodImage}
            alt={"image"}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <MealInfo
            chefName={chefName}
            price={price}
            rating={rating}
            deliveryTime={deliveryTime}
            chefExperience={chefExperience}
          />
          <Ingredients ingredients={ingredients} />
        </div>

        {/* CTA Button */}
        <div className="text-center space-x-10 mt-10">
          <Button
            onClick={() => navigate(`/meals/order/${id}`)}
            size="w-3xs"
            rounded="rounded-3xl"
          >
            Order Now
          </Button>
          <Button
            onClick={addFavoriteMealHandler}
            className="justify-self-end"
            size="w-3xs"
            bg="bg-primary"
            rounded="rounded-3xl"
          >
            {isFavorite ? "Favorited" : "Add To Favorite"}
          </Button>
        </div>
      </div>
      <Reviews foodId={id} />
    </div>
  );
};

export default ViewDetails;
