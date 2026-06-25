import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/axios";
import toast from "react-hot-toast";

export function useAddToCart(){
    const queryClient = useQueryClient();
    return useMutation({
mutationKey:["addToCart"] ,
mutationFn: async ({ bookId, qty = 1 }) => {
    try {

       const addResponse = await api.post(`/cart` , { bookId });
       let finalData = addResponse.data;
       

       if (Number(qty) > 1) {

           const cartItems = addResponse.data?.data;

           const addedItem = [...cartItems].reverse().find(item => Number(item.bookId) === Number(bookId));
           if (addedItem && addedItem.cartId) {

               const updateResponse = await api.post(`/cart/${addedItem.cartId}`, { qty });
               finalData = updateResponse.data;
           }
       }
       return finalData;
    } catch (error) {
        throw error;
    }
},
onSuccess: (data) => {
    localStorage.removeItem("forceEmptyCart");
    queryClient.invalidateQueries({ queryKey: ["cart"] });
    toast.success("Book added to cart successfully");
} ,
onError: (error) => {
    toast.error(error.response?.data?.message || "An error occurred");
} ,})
}