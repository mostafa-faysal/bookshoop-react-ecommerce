import { useBooks } from "../../../../hooks/useBooks";
import ErrorMessage from "../../../ui/errorMessage/ErrorMessage";
import Loader from "../../../ui/loader/Loader";
import BookListItem from "./BookListItem";

export default function BooksCart({ selectedCategory }) {
  const { data: books, isLoading, error } = useBooks(selectedCategory);

  return (
    <div className="container p-4 mx-auto">
      {isLoading && <Loader height="75vh" />}
      {error && <ErrorMessage message={error.message} height="75vh" />}

      <div className="flex flex-col gap-6 mx-auto mt-6 max-w-4xl min-h-[70vh]">
        {books &&
          books.map((book) => (
            <BookListItem key={book.id} book={book} />
          ))}
      </div>
    </div>
  );
}
