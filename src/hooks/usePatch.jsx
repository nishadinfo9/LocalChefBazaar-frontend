import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import useApi from "./useApi";
import toast from "react-hot-toast";

const usePatch = ({ invalidateQueries = [] }) => {
  const queryClient = useQueryClient();
  const api = useApi();

  return useMutation({
    mutationFn: async ({ url, payload }) => {
      return api.patch(url, payload);
    },
    onMutate: () => {
      const toastId = toast.loading("Updating...");
      return { toastId };
    },

    onSuccess: (_, __, context) => {
      if (context?.toastId) toast.dismiss(context.toastId);
      toast.success("Updated successfully!");
      invalidateQueries.forEach((q) => queryClient.invalidateQueries(q));
    },
    onError: (error) => {
      const msg = error?.response?.data?.message || "Something went wrong!";
      toast.error(msg);
    },
  });
};

export default usePatch;
