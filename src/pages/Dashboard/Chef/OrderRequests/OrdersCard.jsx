import React, { memo } from "react";
import { shortTimeAgo } from "../../../../utils/shortTimeAgo";

const OrdersCard = memo(({ order, updateOrderStatus }) => {
  const {
    foodImage = "",
    mealName = "",
    totalPrice = 0,
    quantity = 0,
    orderStatus = "",
    userEmail = "",
    orderTime = "",
    userAddress = "",
    paymentStatus = "",
  } = order;

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={foodImage} alt={mealName} />
            </div>
          </div>
          <div></div>
        </div>
      </td>
      <td>{mealName}</td>
      <td>${totalPrice}</td>
      <td>{quantity}</td>
      <td>{orderStatus}</td>
      <td>{userEmail}</td>
      <td>{shortTimeAgo(orderTime)}</td>
      <td>{userAddress}</td>
      <td>{paymentStatus}</td>
      <td className="text-center ">
        <div className="flex justify-center items-center gap-5 ">
          {(orderStatus === "pending" && (
            <>
              <button
                onClick={() => updateOrderStatus(order?._id, "cancelled")}
                className="btn btn-sm btn-error text-white"
              >
                Cancel
              </button>
              <button
                disabled={paymentStatus !== "paid"}
                onClick={() => updateOrderStatus(order?._id, "accepted")}
                className="btn btn-sm btn-secondary text-white"
              >
                Accept
              </button>
              <button disabled className="btn btn-sm btn-primary text-white">
                Deliver
              </button>
            </>
          )) ||
            (orderStatus === "cancelled" && (
              <>
                <button disabled className="btn btn-sm btn-error text-white">
                  Cancel
                </button>
                <button
                  disabled
                  className="btn btn-sm btn-secondary text-white"
                >
                  Accept
                </button>
                <button disabled className="btn btn-sm btn-primary text-white">
                  Deliver
                </button>
              </>
            )) ||
            (orderStatus === "delivered" && (
              <>
                <button disabled className="btn btn-sm btn-error text-white">
                  Cancel
                </button>
                <button
                  disabled
                  className="btn btn-sm btn-secondary text-white"
                >
                  Accept
                </button>
                <button disabled className="btn btn-sm btn-primary text-white">
                  Deliver
                </button>
              </>
            )) ||
            (orderStatus === "accepted" && paymentStatus === "paid" && (
              <>
                <button disabled className="btn btn-sm btn-error text-white">
                  Cancel
                </button>
                <button
                  disabled
                  className="btn btn-sm btn-secondary text-white"
                >
                  Accept
                </button>
                <button
                  onClick={() => updateOrderStatus(order?._id, "delivered")}
                  className="btn btn-sm btn-primary text-white"
                >
                  Deliver
                </button>
              </>
            ))}
        </div>
      </td>
    </tr>
  );
});
export default OrdersCard;

//   Button flow----
//   orderStatus === "pending" && paymentStatus === "pending" && "enable cancelled - disable all"
//   orderStatus === "pending" && paymentStatus === "paid" && "enable all - disable deliver"
//   orderStatus === "accepted" && "enable delivered and all"
//   orderStatus === "cancelled" && "disable all"
//   orderStatus === "delivered" && "disable all"
