import React, { memo } from "react";

const PaymentCard = memo(({ payment }) => {
  console.log(payment);
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
      <td>{totalPrice}</td>
      <td>{transactionId}</td>
      <td>qweiuhdfsaig</td>
      <td>{paidAt}</td>
    </tr>
  );
});

export default PaymentCard;
