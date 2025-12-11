import React, { useEffect } from "react";
import Select from "../../../../utils/Select";
import Button from "../../../../utils/Button";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import usePatch from "../../../../hooks/usePatch";

const EditModal = ({ modalRef, review, refetch }) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (review) {
      reset({ rating: review.rating, comment: review.comment });
    }
  }, [review, reset]);

  const updateReview = usePatch({
    invalidateQueries: [["reviews"]],
    message: "review updated successfully",
  });

  const reviewHandler = (data) => {
    console.log("data", data);
    if (!review) return;
    updateReview.mutate(
      {
        url: `/meals/update-review/${review?._id}`,
        payload: data,
      },
      {
        onSuccess: (data) => {
          modalRef.current?.close();
          refetch();
          console.log("edit", data);
        },
      }
    );
  };

  return (
    <dialog ref={modalRef} id="my_modal_1" className="modal">
      <div className="modal-box">
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">
              <IoMdClose />
            </button>
          </form>
        </div>
        {/* content  */}
        <div className="mt-10">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Add Your Review
          </h3>

          <form onSubmit={handleSubmit(reviewHandler)} className="space-y-5">
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

            <Button type="submit">Update Review</Button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default EditModal;
