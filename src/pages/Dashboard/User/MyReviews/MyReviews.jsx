import React from "react";
import useFetch from "../../../../hooks/useFetch";
import useAuth from "../../../../hooks/useAuth";
import Loader from "../../../../utils/Loader";
import ReviewCard from "./ReviewCard";

const MyReviews = () => {
  const { user } = useAuth();
  const { data, isLoading, isError, error } = useFetch({
    url: "/meals/my-reviews",
    queryKey: ["reviews", user?.email],
  });

  if (isLoading) return <Loader />;
  if (isError) return <p>{error.message}</p>;
  if (!data?.reviews?.length) return <p>No reviews Found</p>;

  return (
    <div className="min-h-screen bg-base-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Customer Reviews</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.reviews?.map((item) => (
          <ReviewCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
