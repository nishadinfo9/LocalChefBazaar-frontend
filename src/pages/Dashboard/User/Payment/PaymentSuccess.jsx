import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import usePatch from "../../../../hooks/usePatch";
import Loader from "../../../../utils/Loader";

const PaymentSuccess = () => {
  const [paymentParams] = useSearchParams();
  const sessionId = paymentParams.get("session_id");
  const createPayment = usePatch({
    invalidateQueries: [["payments"]],
    message: "payment updated successfully",
  });

  useEffect(() => {
    if (!sessionId) return;

    createPayment.mutate(
      { url: `/payment/verify-session/${sessionId}` },
      {
        onError: (error) => {
          console.log(error);
        },
      }
    );
  }, [sessionId]);

  return (
    <div className="text-green-600 text-xl font-semibold">
      Payment Verified ✔
    </div>
  );
};

export default PaymentSuccess;
