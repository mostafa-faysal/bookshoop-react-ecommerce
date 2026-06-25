import { useWishesLength } from "../../../hooks/useWishesLength";
import { useGetAllItem } from "../../../hooks/useGetAllItem";

import { Link } from "react-router-dom";

export default function NavIcons() {
  const { data: WishesCount } = useWishesLength();
  const { data: cartItems } = useGetAllItem();
  const cartCountLength = cartItems?.length || 0;
  return (
    <>
      <Link to="/wishlist" className="m-0 indicator btn btn-circle btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="size-[1.7em] text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
        <span className="absolute bottom-5.5 left-5.5 flex h-[18px] w-[18px] items-center justify-center rounded-full border border-white bg-[#D9176C] text-[10px] text-white">
          {WishesCount?.count}
        </span>
      </Link>

      <Link to="/cart" className="m-0 indicator btn btn-circle btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-[1.7em] text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <span className="absolute bottom-5.5 left-5.5 flex h-[18px] w-[18px] items-center justify-center rounded-full border border-white bg-[#D9176C] text-[10px] text-white">
          {cartCountLength}
        </span>
      </Link>
    </>
  );
}
