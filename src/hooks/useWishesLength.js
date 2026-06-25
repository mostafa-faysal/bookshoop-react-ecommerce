import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axios";

export function useWishesLength() {
  return useQuery({
    queryKey: ["count"],
    queryFn: async () => {
      const response = await api.get("/wishlist/count");
      return response.data.data;
    }
  });
    }