import { useNavigate } from "react-router-dom";
import { useGetAllItem } from "../../../../hooks/useGetAllItem";

export default function BtnShopinCart() {
  const navigate = useNavigate();
  const { data: cartData } = useGetAllItem();
  return (
    <button
      onClick={() => navigate("/cart/checkout")}
      disabled={!cartData || cartData.length === 0}
      className="w-full py-3.5 px-4 bg-[#D9176C] hover:bg-[#c41161] text-white rounded-full text-base font-semibold shadow-lg transition-all duration-200 flex justify-center items-center h-14 disabled:opacity-70 disabled:cursor-not-allowed"
    >
      Proceed to Checkout
    </button>
  );
}
