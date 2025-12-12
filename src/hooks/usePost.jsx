import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import useApi from "./useApi";
import toast from "react-hot-toast";

const usePost = ({
  url,
  invalidateQueries = [],
  message = "Created successfully!",
}) => {
  const queryClient = useQueryClient();
  const api = useApi();

  return useMutation({
    mutationFn: async (payload) => {
      const token = localStorage.getItem("accessToken");
      const { data } = await api.post(url, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    },
    onSuccess: () => {
      toast.success(message);
      invalidateQueries.forEach((q) => queryClient.invalidateQueries(q));
    },
    onError: (error) => {
      const msg = error?.response?.data?.message || "Something went wrong!";
      toast.error(msg);
    },
  });
};

export default usePost;
