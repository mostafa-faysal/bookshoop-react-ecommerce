import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/axios";
import useAuthStore from "../store/useAuthStore";

export function useRegister() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post("auth/register", data);
      return response.data;
    },
    onSuccess: (data) => {

      if (data?.token) {
        useAuthStore.getState().setToken(data.token);
      } else if (data?.data?.token) {
        useAuthStore.getState().setToken(data.data.token);
      }
      queryClient.invalidateQueries(["user"]);
    },
  });
}
