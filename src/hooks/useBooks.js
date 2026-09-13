import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axios";

export const useBooks = (category = "") => {
  return useQuery({
    queryKey: ["books", category],
    queryFn: async () => {
      
      const response = await api.get("/categories");
      const categoriesData = response.data.data;

      
      if (category) {
        const selectedCat = categoriesData.find(c => c.name === category);
        return selectedCat 
          ? selectedCat.books.map(book => ({ ...book, category: selectedCat.name }))
          : [];
      }
      
      let allBooks = [];
      categoriesData.forEach(cat => {
        if (cat.books && Array.isArray(cat.books)) {
          const mappedBooks = cat.books.map(book => ({ ...book, category: cat.name }));
          allBooks = [...allBooks, ...mappedBooks];
        }
      });
      
      return allBooks;
    },
  });
};
