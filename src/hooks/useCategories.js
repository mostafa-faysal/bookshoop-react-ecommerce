import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axios";

export function useCategories() {
    return useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const response = await api.get("/categories");
            return response.data.data || response.data;
        },
    });
}