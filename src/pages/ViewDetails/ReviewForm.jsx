import React from "react";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import usePost from "../../hooks/usePost";
import Input from "../../utils/Input";
import Select from "../../utils/Select";
import Button from "../../utils/Button";
import { useNavigate } from "react-router-dom";

const ReviewForm = ({ foodId }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const createReview = usePost({
    url: "/meals/review-create",
    invalidateQueries: [["reviews", foodId]],
    message: "review successfully",
  });

  const reviewHandler = (data) => {
    const { comment, rating } = data;
    createReview.mutate(
      { foodId, comment, rating },
      {
        onSuccess: () => {
          reset();
        },
      },
    );
  };

  if (!user)
    return <Button bg="bg-primary text-white" onClick={() => navigate("/login")}>Give Review</Button>;

  return (
    <form onSubmit={handleSubmit(reviewHandler)} className="space-y-5">
      <Input
        bg="bg-white"
        label={"Your Name"}
        value={user?.name}
        readOnly={user}
        placeholder="Enter your name"
      />

      <Select
        bg="bg-white"
        label={"Rating"}
        options={["1", "2", "3", "4", "5"]}
        {...register("rating", { required: true })}
      />

      <div>
        <label className="block font-semibold text-gray-700 mb-1">
          Your Review
        </label>
        <textarea
          {...register("comment", { required: true })}
          rows="4"
          className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:border-secondary focus:ring-secondary focus:ring-1 outline-none"
          placeholder="Share your experience..."
        ></textarea>
      </div>

      <Button type="submit">Give Review</Button>
    </form>
  );
};

export default ReviewForm;
