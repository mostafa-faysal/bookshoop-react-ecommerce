import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/axios";
import toast from "react-hot-toast";

export function useCartDelete() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (id) => {
      const res = await api.delete(`/cart/${id}`, { qty: "0"});
      return res.data;
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success("Item removed from cart successfully", { id: context?.toastId });
      
    },
    onError: (error, context) => {
      toast.error(error.response?.data?.message || "An error occurred", { id: context?.toastId });
    },
    onMutate: () => {
      const toastId = toast.loading("Removing from cart...");
      return { toastId };
    },
  });
  return mutation;
}
