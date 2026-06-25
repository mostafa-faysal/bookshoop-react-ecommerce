import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/axios";
import toast from "react-hot-toast";

export const useAddWishlist = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      try {
        const response = await api.post(`/wishlist/add`, { bookId: id });
        return response.data;
      } catch (error) {
        const errorData = error.response?.data;
        let errorMsg = errorData?.errors?.en;
        if (errorData && errorData.message) {
          errorMsg = errorData.message;
        }
        toast.error(errorMsg || "An error occurred");
        throw error;
      }
    },
    onSuccess: (data) => {
      toast.success( data.message ? data.message : "The book has been added to favorites");
      queryClient.invalidateQueries(["wishlist"]);
    },
  });
};