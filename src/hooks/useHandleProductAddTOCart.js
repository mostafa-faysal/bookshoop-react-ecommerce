export const useHandleProductClick = () => {

  const HandleProductClick = (book) => {
    if (!book) return;

    const bookData = {
      id: book.id,
      image: book.image,
      title: book.title,
      price: book.price,
      description: book.description,
    };
    localStorage.setItem(`${book.id}`, JSON.stringify(bookData));
    localStorage.getItem(`${book.id}`);
   
  };

  return HandleProductClick;
};