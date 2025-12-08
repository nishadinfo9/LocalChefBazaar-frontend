import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../../utils/Input";
import { useForm } from "react-hook-form";
import Select from "../../utils/Select";
import Summary from "./Summary";
import useFetch from "../../hooks/useFetch";

const OrderPage = () => {
  const { mealId } = useParams();
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: { quantity: 1, orderTime: "" },
  });

  const { data } = useFetch({
    url: `/meals/single-meal/${mealId}`,
    queryKey: ["meal", mealId],
  });

  const meals = data?.meal || {};
  const { foodName = "", chefId = "", price = 0, userEmail = "" } = meals;

  const quantity = watch("quantity") || 1;
  const totalPrice = useMemo(() => price * quantity, [price, quantity]);

  //time
  useEffect(() => {
    const time = new Date().toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
    setValue("orderTime", time);
  }, [setValue]);

  const onSubmit = (data) => {
    data.totalPrice = totalPrice;
    console.log(data);
  };
  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="card bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-6">Delivery Information</h2>

            <form
              id="orderForm"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <Input
                type="text"
                bg="white"
                label={"Meal Name"}
                value={foodName}
                readOnly
                {...register("mealName", { required: true })}
              />

              <Input
                type="number"
                bg="white"
                value={price}
                readOnly
                label={"Price"}
                {...register("price", { required: true })}
              />

              <Input
                type="number"
                bg="white"
                defaultValue={1}
                min={1}
                label={"Quantity"}
                {...register("quantity", { required: true, min: 1 })}
              />

              <Select
                label={"Order Status"}
                bg="bg-white"
                options={["pending"]}
                {...register("orderStatus", { required: true })}
              />

              <Input
                type="time"
                bg="white"
                label={"Order Time"}
                {...register("orderTime", { required: true })}
              />

              <Input
                type="email"
                bg="white"
                value={userEmail}
                readOnly
                label={"User Email"}
                {...register("userEmail", { required: true })}
              />

              <Input
                type="text"
                bg="white"
                label={"User Address"}
                {...register("userAddress", { required: true })}
              />

              <Input
                type="text"
                bg="white"
                value={chefId}
                label={"Chef Id"}
                {...register("chefId", { required: true })}
              />
            </form>
          </div>
        </div>
        <div className="space-y-6">
          <Summary
            quantity={quantity}
            foodName={foodName}
            price={price}
            totalPrice={totalPrice}
            form="orderForm"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
