import React, { useRef, useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import useAuth from "../../../../hooks/useAuth";
import Loader from "../../../../utils/Loader";
import ReviewCard from "./ReviewCard";
import useDelete from "../../../../hooks/useDelete";
import EditModal from "./EditModal";
import Swal from "sweetalert2";

const MyReviews = () => {
  const [review, setReview] = useState(null);
  const modalRef = useRef();
  const { user } = useAuth();
  const { data, isLoading, isError, error, refetch } = useFetch({
    url: "/meals/my-reviews",
    queryKey: ["reviews", user?.email],
  });

  const deleteReview = useDelete({
    invalidateQueries: [["reviews"]],
    message: "Review Deleted Successfully",
  });

  const handleReviewEdit = (review) => {
    setReview(review);
    modalRef.current?.showModal();
  };

  const handleReviewDelete = (reviewId) => {
    Swal.fire({
      title: `Are You Sure`,
      text: "You are deleted the review",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteReview.mutate(
          { url: `meals/review-delete/${reviewId}` },
          {
            onSuccess: () => {
              refetch();
            },
          }
        );
      }
    });
  };

  if (isLoading) return <Loader />;
  if (isError) return <p>{error.message}</p>;
  if (!data?.reviews?.length) return <p>No reviews Found</p>;

  return (
    <div className="min-h-screen bg-base-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Customer Reviews</h1>
      <EditModal modalRef={modalRef} review={review} refetch={refetch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.reviews?.map((item) => (
          <ReviewCard
            key={item._id}
            handleReviewEdit={handleReviewEdit}
            handleReviewDelete={handleReviewDelete}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
