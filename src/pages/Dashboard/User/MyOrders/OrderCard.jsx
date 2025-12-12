import React from "react";
import usePost from "../../../../hooks/usePost";
import { Link } from "react-router-dom";
import { shortTimeAgo } from "../../../../utils/shortTimeAgo";

const OrderCard = ({ order }) => {
  const {
    foodImage,
    mealName,
    chefId,
    quantity,
    totalPrice,
    orderTime,
    paymentStatus,
    orderStatus,
    foodId,
  } = order;

  const createPayment = usePost({
    url: `/payment/create-session/${foodId}`,
    invalidateQueries: [["payments"]],
    message: "payment successfully",
  });

  const paymentHandler = () => {
    createPayment.mutate(
      {},
      {
        onSuccess: (data) => {
          window.location.assign(data?.url);
        },
      }
    );
  };

  return (
    <div className="grid grid-cols-3 gap-4 mt-2 items-center relative">
      <div className="absolute -top-6 gap-1 text-sm flex items-center justify-center">
        <p>Order:</p>
        <Link
          to={`/meals/${foodId}`}
          className="text-blue-600 text-xs font-medium"
        >
          #{foodId}
        </Link>
      </div>
      {/* Left  */}
      <div className="flex items-start gap-3 text-gray-600">
        <img
          src={foodImage || "https://placehold.co/100x120"}
          alt="food"
          className="w-24 h-28 object-cover rounded-lg"
        />

        <div>
          <div className="mt-1 text-sm ">
            <h2 className="text-lg font-semibold text-gray-900">{mealName}</h2>
            <p>
              Chef: <span className="font-medium">{chefId}</span>
            </p>
          </div>

          <div className="mt-3 text-sm  ">
            <div className="flex  gap-4">
              <p>
                Qty: <span className="font-medium">{quantity}</span>
              </p>
              <p>
                Price:{" "}
                <span className="font-medium text-green-500">
                  ${totalPrice}
                </span>
              </p>
            </div>
            <div className="flex gap-4">
              <p>
                <span className="">{shortTimeAgo(orderTime)}</span>
              </p>
              <p>
                payment:{" "}
                <span
                  className={`${
                    paymentStatus === "pending"
                      ? "text-yellow-500"
                      : "text-green-500"
                  } font-semibold`}
                >
                  {paymentStatus}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle  */}
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-lg font-semibold text-gray-900">Order Status</h2>
        <p
          className={` ${
            (orderStatus === "pending" && "text-yellow-500") ||
            (orderStatus === "accepted" && "text-green-500") ||
            (orderStatus === "delivered" && "text-primary") ||
            (orderStatus === "cancelled" && "text-red-500")
          } text-xl font-semibold`}
        >
          {orderStatus}
        </p>
      </div>

      {/* Right  */}
      <div className="flex justify-end">
        <button
          disabled={paymentStatus === "paid"}
          onClick={() => paymentHandler(foodId)}
          className={`btn btn-secondary btn-md w-32 text-lg rounded-full px-6 
      ${paymentStatus === "paid" ? "cursor-not-allowed" : ""}`}
        >
          {paymentStatus === "pending" ? "Pay" : "Paid"}
        </button>
      </div>
      <div className="divider col-span-3"></div>
    </div>
  );
};

export default OrderCard;
