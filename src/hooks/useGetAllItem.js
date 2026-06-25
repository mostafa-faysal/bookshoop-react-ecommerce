import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axios";
import useAuthStore from "../store/useAuthStore";

export function useGetAllItem() {
  const token = useAuthStore((state) => state.token);

  return useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const response = await api.get("/cart");
      return response.data.data;
    },
    enabled: !!token, 
  });
}