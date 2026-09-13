import { useRouter as useNavigate } from "next/navigation";

export const useHandleProductClick = () => {
  const navigate = useNavigate();

  const handleProductClick = (book) => {
    if (!book) return;

    const bookData = {
      id: book.id,
      image: book.image,
      title: book.title,
      price: book.price,
      description: book.description,
    };
    localStorage.setItem(`${book.id}`, JSON.stringify(bookData));
    const savedData = localStorage.getItem(`${book.id}`);
    savedData && navigate.push(`/books/${book.id}`);
  };

  return handleProductClick;
};