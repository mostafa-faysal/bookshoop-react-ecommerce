import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useCartDelete } from "../../../../../hooks/cartDelete";
import { useUpdateCart } from "../../../../../hooks/useUpdateCart";
import BtnCount from "../../../../btnCount/BtnCount";

export default function CartItem({ item }) {
  const { mutate: deleteCartItem, isPending } = useCartDelete();
  const { mutate: updateCartItem, isPending: isUpdatePending } =
    useUpdateCart();

  return (
    <div className="flex flex-col md:flex-row overflow-hidden border shadow-sm rounded-2xl bg-base-100 border-base-200 w-full md:h-[220px]">
      {/* Image Container */}
      <div className="w-full md:w-[220px] h-[250px] md:h-full shrink-0 p-4 bg-white flex items-center justify-center">
        <img
          src={item.image}
          alt={item.title}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-1 justify-between p-5 md:p-6">
        {/* Title & Description */}
        <div className="flex flex-col gap-2 mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-gray-800 line-clamp-1">
            {item.title}
          </h2>
          <p
            className="text-sm leading-relaxed text-gray-500 line-clamp-2"
            title={item.description}
          >
            {item.description}
          </p>
        </div>

        {/* Controls & Pricing */}
        <div className="flex flex-col gap-6 justify-between items-start mt-auto sm:flex-row sm:items-end">
          {/* Quantity Control */}
          <div className="flex flex-row gap-4 justify-between items-center w-full sm:w-auto">
            <span className="text-sm font-semibold text-[#D9176C] uppercase tracking-wide">
              Quantity:
            </span>
            <BtnCount
              count={item.qty}
              setCount={(newQty) =>
                updateCartItem({ cartId: item.cartId, qty: newQty })
              }
              isLoading={isUpdatePending}
            />
          </div>

          {/* Prices & Delete Action */}
          <div className="flex flex-row gap-6 justify-between items-center w-full sm:w-auto md:gap-10">
            <div className="flex flex-col gap-1 items-center sm:items-start">
              <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                Price
              </span>
              <span className="text-lg font-bold text-gray-800">
                ${item.price}
              </span>
            </div>

            <div className="flex flex-col gap-1 items-center sm:items-start">
              <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                Total
              </span>
              <span className="text-lg font-bold text-[#D9176C]">
                ${item.totalPrice}
              </span>
            </div>

            {/* Delete Button */}
            <button
              onClick={() => deleteCartItem(item.cartId)}
              className="text-red-500 bg-red-50 border-none transition-colors btn btn-circle hover:bg-red-500 hover:text-white"
              disabled={isPending}
              aria-label="Remove item"
            >
              {isPending ? (
                <span className="loading loading-spinner loading-xs"></span>
              ) : (
                <FontAwesomeIcon icon={faTrashCan} size="lg" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
