import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axios";

export const useBook = (id) => {
  return useQuery({
    queryKey: ["singleBook", id],
    queryFn: async () => {
      const response = await api.get(`/books/${id}`);
      return response.data.data;
    },
  });
};
