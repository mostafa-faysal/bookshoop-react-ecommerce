import { api } from "../api/axios";
import { useQuery } from "@tanstack/react-query";

export function useWishlistCart() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["wishlistCart"],
    queryFn: async () => {
      const res = await api.get("/wishlist");
      return res.data?.data;
    },
  });
  return { data, isLoading, error };
}