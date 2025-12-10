import { useMutation, useQueryClient } from "@tanstack/react-query";
import useApi from "./useApi";
import toast from "react-hot-toast";

const useDelete = ({ invalidateQueries = [] }) => {
  const queryClient = useQueryClient();
  const api = useApi();

  return useMutation({
    mutationFn: async ({ url }) => {
      return api.delete(url);
    },
    onMutate: () => {
      const toastId = toast.loading("Deleting...");
      return { toastId };
    },

    onSuccess: (_, __, context) => {
      toast.dismiss(context.toastId);
      toast.success("Deleted successfully!");
      invalidateQueries.forEach((q) => queryClient.invalidateQueries(q));
    },
    onError: (error) => {
      const msg = error?.response?.data?.message || "Something went wrong!";
      toast.error(msg);
    },
  });
};

export default useDelete;
