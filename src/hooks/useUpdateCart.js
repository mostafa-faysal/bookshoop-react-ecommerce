import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/axios";
import toast from "react-hot-toast";

export function useUpdateCart() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ cartId, qty }) => {
      const res = await api.post(`/cart/${cartId}`, { qty });
      return res.data;
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error, context) => {
      toast.error(error.response?.data?.message || "Failed to update cart");
    },
  });
  return mutation;
}
