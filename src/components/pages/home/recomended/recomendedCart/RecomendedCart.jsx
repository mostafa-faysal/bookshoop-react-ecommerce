import ProductImage from "../../../../productImage/ProductImage";
import GroubsBtn from "../../../../groupsBtn/GroubsBtn";
import { useBooks } from "../../../../../hooks/useBooks";
import RecomendedInfo from "./recomendedInfo/RecomendedInfo";
import Loader from "../../../../ui/loader/Loader";
import ErrorMessage from "../../../../ui/errorMessage/ErrorMessage";

export default function RecomendedCart() {
  const { data, isLoading, error } = useBooks();
  const recomendedBooks = data?.slice(3, 5) || [];
  return (
    <div className="flex justify-center w-full h-auto md:h-full">
      <div className="flex flex-col md:flex-row gap-5 justify-center items-center w-[90%]">
        {isLoading && <Loader height="50vh" />}
        {error && <ErrorMessage message={error?.message} height="50vh" />}
        {recomendedBooks.map((book) => (
          <div
            className="flex flex-col md:flex-row gap-4 p-4 md:p-6 w-full md:w-[50%] bg-white shadow-sm items-stretch h-auto md:h-[50vh] mx-auto"
            key={book.id}
          >
            <div className="w-[70%] md:w-[40%] mx-auto h-[250px] md:h-auto shrink-0">
              <ProductImage
                image={book.image}
                title={book.title}
                id={book.id}
              />
            </div>
            <div className="flex flex-col flex-1 gap-4 justify-between md:gap-0">
              <RecomendedInfo book={book} />
              <GroubsBtn id={book.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
