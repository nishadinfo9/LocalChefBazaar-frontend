import React, { memo } from "react";
import Button from "../../utils/Button";

const Summary = memo(({ form, foodName, totalPrice, price, qualityWatch }) => {
  return (
    <div className="card bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

      <div className="space-y-4">
        <div className="flex justify-between text-gray-700">
          <span>Meal Name:</span>
          <span className="font-medium">{foodName}</span>
        </div>

        <div className="flex justify-between text-gray-700">
          <span>Price:</span>
          <span className="font-medium">${price}</span>
        </div>

        <div className="flex justify-between text-gray-700">
          <span>Quantity:</span>
          <span className="font-medium">{qualityWatch}</span>
        </div>

        <div className="divider my-3"></div>
        <div className="flex justify-between text-lg font-bold text-gray-900">
          <span>Total:</span>
          <span>${totalPrice}</span>
        </div>
      </div>
      <div className="rounded-2xl mt-10 shadow-md flex justify-center">
        <Button
          type="submit"
          form={form}
          className="w-full text-lg py-3 rounded-xl"
        >
          Confirm Order
        </Button>
      </div>
    </div>
  );
});

export default Summary;
