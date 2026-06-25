import { useGetAllItem } from "../../../../hooks/useGetAllItem";
import { useBooks } from "../../../../hooks/useBooks";
import ErrorMessage from "../../../ui/errorMessage/ErrorMessage";
import Loader from "../../../ui/loader/Loader";
import CartItem from "./cartItem/CartItem";
import EmptyCart from "./emptyCart/EmptyCart";

export default function CartList() {
  const { data: cartData, isLoading: isCartLoading, error } = useGetAllItem();
  const { data: booksData, isLoading: isBooksLoading } = useBooks();

  if (isCartLoading || isBooksLoading) return <Loader height="75vh" />;
  if (error) return <EmptyCart />;

  const mergedCart =
    cartData?.map((cartItem) => {
      const bookDetail = booksData?.find(
        (b) => Number(b.id) === Number(cartItem.bookId),
      );
      return {
        ...cartItem,
        title: bookDetail?.title || "Unknown Book",
        image: bookDetail?.image || "https://via.placeholder.com/150",
        description: bookDetail?.description || "No description available.",
      };
    }) || [];

  return mergedCart.length === 0 ? (
    <EmptyCart />
  ) : (
    <div className="mx-auto">
      <div className="flex flex-col gap-6 mx-auto mt-6 max-w-[90%] min-h-[70vh] items-center">
        {mergedCart.map((item) => (
          <CartItem key={item.cartId} item={item} />
        ))}
      </div>
    </div>
  );
}
