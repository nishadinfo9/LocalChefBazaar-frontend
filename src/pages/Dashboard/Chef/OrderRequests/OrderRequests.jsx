import React from "react";
import useFetch from "../../../../hooks/useFetch";
import useAuth from "../../../../hooks/useAuth";
import OrdersCard from "./OrdersCard";
import Loader from "../../../../utils/Loader";

const OrderRequests = () => {
  const { user } = useAuth();
  const { data, isLoading, isError, error } = useFetch({
    url: "/order/chef-orders",
    queryKey: ["orders", user?.email],
  });

  if (isLoading) return <Loader />;
  if (isError) return <p>{error.message}</p>;
  if (!data?.orders?.length) return <p>Chef Orders Not Found</p>;

  return (
    <div>
      <title>Local Chef Bazaar - My Meals</title>
      <h1 className="text-3xl font-bold mb-6">Chef Orders</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Food Image</th>
              <th>Food Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Order Status</th>
              <th>User Email</th>
              <th>Order Time</th>
              <th>User Address</th>
              <th>Payment Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.orders?.map((order) => (
              <OrdersCard key={order._id} order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderRequests;
