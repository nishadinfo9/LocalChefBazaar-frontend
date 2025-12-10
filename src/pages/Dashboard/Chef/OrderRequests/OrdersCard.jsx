import React, { memo } from "react";

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
      <td>{totalPrice}</td>
      <td>{quantity}</td>
      <td>{orderStatus}</td>
      <td>{userEmail}</td>
      <td>{orderTime}</td>
      <td>{userAddress}</td>
      <td>{paymentStatus}</td>
      <td className="text-center ">
        <div className="flex justify-center items-center gap-5 ">
          {(orderStatus === "pending" && (
            <>
              <button
                onClick={() => updateOrderStatus(order?._id, "reject")}
                className="btn btn-sm btn-error text-white"
              >
                Cancel
              </button>
              <button
                onClick={() => updateOrderStatus(order?._id, "approve")}
                className="btn btn-sm btn-secondary text-white"
              >
                Accept
              </button>
              <button disabled className="btn btn-sm btn-primary text-white">
                Deliver
              </button>
            </>
          )) ||
            (orderStatus === "reject" && (
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
            (orderStatus === "deliver" && (
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
            (orderStatus === "approve" && (
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
                  onClick={() => updateOrderStatus(order?._id, "deliver")}
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

// button flow
// {
//   (orderStatus === "pending" && "enable all disable deliver") ||
//     (orderStatus === "reject" && "disable all") ||
//     (orderStatus === "deliver" && "disable all") ||
//     (orderStatus === "approve" &&
//       "enable deliver and disable accept and reject");
// }
