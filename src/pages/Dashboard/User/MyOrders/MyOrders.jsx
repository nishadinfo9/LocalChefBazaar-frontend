import React from "react";
import OrderCard from "./OrderCard";
import useFetch from "../../../../hooks/useFetch";
import Loader from "../../../../utils/Loader";

const MyOrders = () => {
  const { data, isLoading, isError, error } = useFetch({
    url: "/order/my-orders",
    queryKey: ["orders"],
  });

  if (isLoading) return <Loader />;
  if (isError) return <p>{error.message}</p>;
  if (!data?.orders?.length) return <p>No orders found.</p>;

  return (
    <div className="w-full my-5 max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-5">
      <div className="flex items-center justify-between mb-4"></div>

      <div className="">
        {data?.orders?.map((order) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
