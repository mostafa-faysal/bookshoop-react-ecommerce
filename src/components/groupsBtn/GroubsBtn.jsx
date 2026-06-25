import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useAddWishlist } from "../../hooks/useAddWishlist";
import { useAddToCart } from "../../hooks/useAddToCart";

export default function GroubsBtn({ id, quantity = 1, isWishlist = true }) {
  const { mutate: addWishlist } = useAddWishlist();
  const { mutate: addToCart } = useAddToCart();
  
  return (
    <div className="flex gap-2 sm:gap-3 w-full items-center">
      <button
        onClick={() => addToCart({ bookId: id, qty: quantity })}
        className="flex-1 text-sm sm:text-base md:text-lg font-medium text-white btn btn-secondary whitespace-nowrap min-h-[2.5rem] h-10 sm:h-12 px-2 sm:px-4"
      >
        Add to cart
      </button>

      {isWishlist && (
        <button
          onClick={() => addWishlist(id)}
          className="btn btn-outline border-[#D9176C] hover:border-[#D9176C] hover:text-white hover:bg-[#D9176C] group px-2 sm:px-4 min-h-[2.5rem] h-10 sm:h-12"
        >
          <FontAwesomeIcon
            icon={faHeart}
            className="text-[#D9176C] group-hover:text-white text-lg sm:text-xl"
          />
        </button>
      )}
    </div>
  );
}
