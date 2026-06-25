import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axios";

export const useUser = (token) => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await api.get("/user");
      return res.data?.userInfo || res.data?.data || res.data;
    },
    enabled: !!token,
  });
};
