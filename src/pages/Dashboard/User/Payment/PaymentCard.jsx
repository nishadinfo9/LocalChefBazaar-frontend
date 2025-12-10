import React, { memo } from "react";
import { shortTimeAgo } from "../../../../utils/shortTimeAgo";

const PaymentCard = memo(({ payment }) => {
  const {
    mealName = "",
    paymentStatus = "",
    currency = "",
    totalPrice = 0,
    transactionId = "",
    paidAt = "",
  } = payment;
  return (
    <tr className="py-5">
      <td>{mealName}</td>
      <td>{paymentStatus}</td>
      <td>{currency}</td>
      <td>${totalPrice}</td>
      <td>{transactionId}</td>
      <td>{shortTimeAgo(paidAt)}</td>
    </tr>
  );
});

export default PaymentCard;
