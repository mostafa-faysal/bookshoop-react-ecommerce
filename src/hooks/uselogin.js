import { useMutation, useQueryClient } from "@tanstack/react-query"
import { api } from "../api/axios"
import useAuthStore from "../store/useAuthStore"

export function uselogin() {
    const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({email , password}) => {
      const response = await api.post("auth/login" , {email , password})
      return response.data
    },
    onSuccess: (data) => {
      
      if (data?.token) {
          useAuthStore.getState().setToken(data.token)
      } else if (data?.data?.token) { 
          useAuthStore.getState().setToken(data.data.token)
      }
      queryClient.invalidateQueries(["user"])
    }
  })
}
