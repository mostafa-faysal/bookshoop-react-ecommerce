import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axios";

export const useWishlist = () => {
  return useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const response = await api.get(`/wishlist/get`);
      return response.data.data;
    }
  });
};