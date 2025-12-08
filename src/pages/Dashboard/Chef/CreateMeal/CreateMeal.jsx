import React from "react";
import Input from "../../../../utils/Input";
import { useForm } from "react-hook-form";
import Select from "../../../../utils/Select";
import Checkbox from "../../../../utils/Checkbox";
import Button from "../../../../utils/Button";
import usePost from "../../../../hooks/usePost";
import useAuth from "../../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const CreateMeal = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const addMeals = usePost({
    url: "/meals/create",
    invalidateQueries: [["meals"]],
  });

  const createMealHandler = (data) => {
    const {
      chefName,
      chefExperience,
      deliveryTime,
      foodName,
      price,
      rating,
      userEmail,
      ingredients,
      foodImage,
    } = data;

    const formData = new FormData();
    formData.append("chefName", chefName);
    formData.append("chefExperience", chefExperience);
    formData.append("deliveryTime", deliveryTime);
    formData.append("foodName", foodName);
    formData.append("price", price);
    formData.append("rating", rating);
    formData.append("userEmail", userEmail);

    ingredients.forEach((ing) => formData.append("ingredients", ing));

    if (foodImage && foodImage.length > 0) {
      formData.append("foodImage", foodImage[0]);
    }
    addMeals.mutate(formData, {
      onSuccess: (data) => {
        navigate("/dashboard/my-meals");
      },
      onError: (error) => console.log(error),
    });
  };

  return (
    <div className="max-w-lg mx-auto  p-6 rounded-xl shadow-2xl my-10">
      <title>Local Chef Bazaar - Create Meal</title>
      <h2 className="text-2xl font-bold mb-4 text-center">Create Meal</h2>
      <form className="space-y-2" onSubmit={handleSubmit(createMealHandler)}>
        <Input
          label={"Food Name"}
          type="text"
          {...register("foodName", { required: true })}
        />
        <Input
          label={"Chef Name"}
          type="text"
          {...register("chefName", { required: true })}
        />
        <Input
          label={"User Email"}
          type="email"
          value={user?.email}
          readOnly
          {...register("userEmail", { required: true })}
        />
        <Input
          label={"Food Image"}
          type="file"
          {...register("foodImage", { required: true })}
        />
        <Input
          label={"Price"}
          type="Number"
          {...register("price", { required: true })}
        />
        {/* rating */}
        <Select
          label={"Rating"}
          options={["1", "2", "3", "4", "5"]}
          {...register("rating", { required: true })}
        />
        {/* Ingredients select  */}
        <Checkbox
          label={"Ingredients"}
          options={["Chicken", "Rice", "Oil", "Salt", "Onion"]}
          {...register("ingredients", { required: true })}
        />
        {/* Estimated Delivery Time select  */}
        <Select
          label={"Chef’sExperience "}
          options={["1 year", "2 years", "3 years", "5 years", "10+ years"]}
          {...register("chefExperience", { required: true })}
        />
        <Select
          label={"Estimated Delivery Time"}
          options={["15 min", "20 min", "30 min", "45 min", "60 min"]}
          {...register("deliveryTime", { required: true })}
        />
        <Button className="w-full btn-secondary my-10" type="submit">
          Create Meal
        </Button>
      </form>
    </div>
  );
};

export default CreateMeal;
