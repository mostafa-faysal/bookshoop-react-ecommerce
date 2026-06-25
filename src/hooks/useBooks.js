import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axios";

export const useBooks = (category = "") => {
  return useQuery({
    queryKey: ["books", category],
    queryFn: async () => {
      // نجلب بيانات الأقسام بالكامل
      const response = await api.get("/categories");
      const categoriesData = response.data.data;

      // إذا المستخدم اختار قسم معين (مثلا Drama)
      if (category) {
        const selectedCat = categoriesData.find(c => c.name === category);
        return selectedCat ? selectedCat.books : [];
      }
      
      // إذا لم يختر قسم (الكل)، نجمع كل الكتب من جميع الأقسام في مصفوفة واحدة
      let allBooks = [];
      categoriesData.forEach(cat => {
        if (cat.books && Array.isArray(cat.books)) {
          allBooks = [...allBooks, ...cat.books];
        }
      });
      
      return allBooks;
    },
  });
};
