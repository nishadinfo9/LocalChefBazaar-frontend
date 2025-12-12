import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import useApi from "./useApi";
import toast from "react-hot-toast";

const usePatch = ({
  invalidateQueries = [],
  message = "Updated successfully!",
}) => {
  const queryClient = useQueryClient();
  const api = useApi();

  return useMutation({
    mutationFn: async ({ url, payload }) => {
      const token = localStorage.getItem("accessToken");
      return api.patch(url, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
    },
    onMutate: () => {
      const toastId = toast.loading("Updating...");
      return { toastId };
    },

    onSuccess: (_, __, context) => {
      if (context?.toastId) toast.dismiss(context.toastId);
      toast.success(message);
      invalidateQueries.forEach((q) => queryClient.invalidateQueries(q));
    },
    onError: (error) => {
      const msg = error?.response?.data?.message || "Something went wrong!";
      toast.error(msg);
    },
  });
};

export default usePatch;
