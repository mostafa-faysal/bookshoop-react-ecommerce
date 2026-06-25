import { useWishlistCart } from "../../../../hooks/useWishlistCart";
import ErrorMessage from "../../../ui/errorMessage/ErrorMessage";
import Loader from "../../../ui/loader/Loader";
import EmptyWishlist from "./EmptyWishlist";
import WishlistItem from "./WishlistItem";

export default function WishlistCart() {
  const { data: wishlistData, isLoading, error } = useWishlistCart();

  if (isLoading) return <Loader height="75vh" />;
  if (error) return <ErrorMessage message={error.message} height="75vh" />;

  return wishlistData?.length === 0 ? (
    <EmptyWishlist />
  ) : (
    <div className="container p-4 mx-auto">
      <div className="flex flex-col gap-6 mx-auto mt-6 max-w-4xl min-h-[70vh]">
        {wishlistData &&
          wishlistData.map((item) => (
            <WishlistItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}
