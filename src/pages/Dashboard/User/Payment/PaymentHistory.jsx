import React from "react";
import PaymentCard from "./PaymentCard";
import useFetch from "../../../../hooks/useFetch";
import useAuth from "../../../../hooks/useAuth";
import Loader from "../../../../utils/Loader";

const PaymentHistory = () => {
  const { user } = useAuth();

  const { data, isLoading, isError, error } = useFetch({
    url: "/payment/my-payments",
    queryKey: ["payments", user?.email],
  });

  if (isLoading) return <Loader />;
  if (isError) return <p>{error.message}</p>;
  if (!data?.payments?.length) return <p>Payment Not Found</p>;

  return (
    <div>
      <title>Local Chef Bazaar - My Meals</title>
      <h2>My Meals</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Food Name</th>
              <th>Payment Status</th>
              <th>Currency</th>
              <th>Total Price</th>
              <th>Transaction Id</th>
              <th>trackingId</th>
              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody>
            {data?.payments?.map((payment) => (
              <PaymentCard key={payment._id} payment={payment} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
