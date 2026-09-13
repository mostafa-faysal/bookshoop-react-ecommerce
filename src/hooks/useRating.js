import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useRating = (id) => {
  return useQuery({
    queryKey: ["rate", id],
    queryFn: async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
        return response.data;
      } catch (err) {
        return { rating: 4.5, reviewCount: 120 };
      }
    },
  });
};
