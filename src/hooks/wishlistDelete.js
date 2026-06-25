import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/axios";
import toast from "react-hot-toast";

export function useWishlistDelete() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (id) => {
      const res = await api.post(`/wishlist/remove`, { wishlistId: id });
      return res.data;
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["wishlistCart"] });
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      queryClient.invalidateQueries({ queryKey: ["count"] });
      toast.success("Item removed from wishlist successfully", { id: context?.toastId });
    },
    onError: (error, context) => {
      toast.error(error.response?.data?.message || "Error", { id: context?.toastId });
    },
    onMutate: () => {
      const toastId = toast.loading("Deleting...");
      return { toastId };
    }

  });
  return mutation;
}