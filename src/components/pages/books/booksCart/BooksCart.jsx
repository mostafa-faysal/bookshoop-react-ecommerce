import { useBooks } from "../../../../hooks/useBooks";
import ErrorMessage from "../../../ui/errorMessage/ErrorMessage";
import Loader from "../../../ui/loader/Loader";
import BookListItem from "./BookListItem";

export default function BooksCart({ selectedCategory, searchQuery }) {
  const { data: books, isLoading, error } = useBooks(selectedCategory);

  return (
    <div className="container p-4 mx-auto w-full">
      {isLoading && <Loader height="75vh" />}
      {error && <ErrorMessage message={error.message} height="75vh" />}

      <div className="flex flex-col gap-6 mt-6 w-full min-h-[70vh]">
        {books &&
          books
            .filter((book) =>
              searchQuery
                ? book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  book.description.toLowerCase().includes(searchQuery.toLowerCase())
                : true
            )
            .map((book) => <BookListItem key={book.id} book={book} />)}
      </div>
    </div>
  );
}
