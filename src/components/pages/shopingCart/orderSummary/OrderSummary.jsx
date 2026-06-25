import { useNavigate } from "react-router-dom";
import { useGetAllItem } from "../../../../hooks/useGetAllItem";

export default function OrderSummary() {
  const { data: cartData, isLoading, error } = useGetAllItem();

  
  const subtotal =
    cartData?.reduce((sum, item) => sum + Number(item.totalPrice || 0), 0) || 0;

  return (
    <div className="w-full lg:w-full mt-10 p-8 bg-[#3B2F4A1A] shadow-sm rounded-2xl  sticky top-32">
      <div className="flex flex-col gap-8">
        <div>
          <h3 className="mb-6 text-xl font-bold text-gray-800">
            Order Summary
          </h3>

          {isLoading ? (
            <div className="flex justify-center p-4">
              <span className="loading loading-spinner"></span>
            </div>
          ) : error ? (
            <div className="text-sm text-red-500">
              Failed to load order summary
            </div>
          ) : (
            <div className="flex justify-between items-center border-b border-[#E5E7EB] pb-4">
              <span className="text-base font-normal text-[#4B5563]">
                Subtotal
              </span>
              <span className="text-base font-semibold text-gray-900">
                ${subtotal.toFixed(2)}
              </span>
            </div>
          )}
          <div className="flex justify-between mt-4">
            <span className="text-base font-normal text-gray-500">Taxes</span>
            <span className="text-base font-semibold text-gray-900">$0.00</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold text-gray-900">Total</span>
            <span className="text-2xl font-bold text-[#D9176C]">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <p className="text-xs text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
        </div>
      </div>
    </div>
  );
}
