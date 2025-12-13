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
    <div className="">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>
      <div className="my-5  mx-auto bg-white shadow-lg rounded-xl p-1 md:p-5">
        <div className="">
          {data?.orders?.map((order) => (
            <OrderCard key={order._id} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
