import { useGetAllItem } from "../../../../hooks/useGetAllItem";

export default function BtnCheckOut() {
  const { data: cartData } = useGetAllItem();

  return (
    <div className="my-5 w-full">
      <button
        type="submit"
        form="checkout-form"
        disabled={!cartData || cartData.length === 0}
        className="w-full py-3.5 px-4 bg-[#D9176C] hover:bg-[#c41161] text-white rounded-full text-base font-semibold shadow-lg transition-all duration-200 flex justify-center items-center h-14 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        Confirm Order
      </button>
    </div>
  );
}
