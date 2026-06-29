import { useBooks } from "../../../../hooks/useBooks";
import BestSellerHeader from "./bestSellerHeader/BestSellerHeader";
import MarqueeComponent from "./marqueeComponent/MarqueeComponent";
import BookCard from "./bookCard/BookCard";
import Loader from "../../../ui/loader/Loader";
import ErrorMessage from "../../../ui/errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

export default function BestSeller() {
  const { data: books, isLoading, isError, error } = useBooks();

  return (
    <div className=" flex flex-col justify-center items-center mx-auto my-8 bg-[#3B2F4A] w-full py-30">
      <BestSellerHeader />

      {isLoading ? (
        <Loader height="50vh" />
      ) : isError ? (
        <ErrorMessage message={error?.message} />
      ) : (
        <MarqueeComponent
          pauseOnHover={true}
          autoFill={true}
          speed={50}
          className="py-4"
        >
          {books?.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </MarqueeComponent>
      )}

      <Link to={"/books"}>
        <button className="btn btn-active btn-secondary text-[16px]">
          Shop now
        </button>
      </Link>
    </div>
  );
}
