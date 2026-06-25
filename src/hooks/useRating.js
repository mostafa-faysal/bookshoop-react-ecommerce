import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useRating = (id) => {
  return useQuery({
    queryKey: ["rate", id],
    queryFn: async () => {
      const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
      return response.data;
    },
  });
};
