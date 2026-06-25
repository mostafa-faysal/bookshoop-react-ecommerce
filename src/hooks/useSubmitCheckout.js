import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/axios";
import toast from "react-hot-toast";

export const useSubmitCheckout = () => {
  const queryClient = useQueryClient();
  
  return useMutation({

    mutationFn: async (checkoutData) => {
      const res = await api.post(`/orders`, checkoutData);
      return res.data;
    },
    onSuccess: () => {
      queryClient.setQueryData(["cart"], []);
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success("Checkout successful! Your order has been placed.");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Checkout failed. Please try again.");
    }
  });
};
