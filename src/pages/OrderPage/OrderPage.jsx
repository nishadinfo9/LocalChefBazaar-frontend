import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../utils/Input";
import { useForm } from "react-hook-form";
import Select from "../../utils/Select";
import Summary from "./Summary";
import useFetch from "../../hooks/useFetch";
import Swal from "sweetalert2";
import usePost from "../../hooks/usePost";
import Loader from "../../utils/Loader";

const OrderPage = () => {
  const { mealId } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: { quantity: 1, orderTime: "" },
  });

  const { data, isLoading, isError, error } = useFetch({
    url: `/meals/single-meal/${mealId}`,
    queryKey: ["meal", mealId],
  });

  const meals = data?.meal || {};
  const { foodName = "", chefId = "", price, userEmail = "" } = meals;

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

  const createOrder = usePost({
    url: `/order/create/${mealId}`,
    invalidateQueries: [["orders"]],
  });

  //place order
  const onSubmit = (data) => {
    data.totalPrice = totalPrice;
    data.price = parseInt(price);
    data.quantity = parseInt(quantity);

    Swal.fire({
      title: `Your total price is ${data.totalPrice}`,
      text: "Do you want to confirm the order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Place Order",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(data);
        createOrder.mutate(data, {
          onSuccess: () => {
            navigate("/dashboard/my-orders");
          },
        });
      }
    });
  };

  if (isLoading) return <Loader />;
  if (isError) return <p>{error}</p>;

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
                type="email"
                bg="white"
                value={userEmail}
                readOnly
                label={"User Email"}
                {...register("userEmail", { required: true })}
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

              <Input
                type="time"
                bg="white"
                label={"Order Time"}
                {...register("orderTime", { required: true })}
              />

              {chefId && (
                <Input
                  type="text"
                  bg="white"
                  value={chefId}
                  readOnly
                  label={"Chef Id"}
                  {...register("chefId", { required: true })}
                />
              )}

              <Select
                label={"Order Status"}
                bg="bg-white"
                options={["pending"]}
                {...register("orderStatus", { required: true })}
              />

              <Input
                type="text"
                bg="white"
                label={"User Address"}
                {...register("userAddress", { required: true })}
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
