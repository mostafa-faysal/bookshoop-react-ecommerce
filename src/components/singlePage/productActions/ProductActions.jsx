import { useState, useEffect } from "react";
import BtnCount from "../../btnCount/BtnCount";
import GroubsBtn from "../../groupsBtn/GroubsBtn";
import { useGetAllItem } from "../../../hooks/useGetAllItem";
import { useUpdateCart } from "../../../hooks/useUpdateCart";

export default function ProductActions({ id }) {
  const [quantity, setQuantity] = useState(1);
  const [cartId, setCartId] = useState(null);
  const { data: cartData } = useGetAllItem();
  const { mutate: updateCartItem, isPending: isUpdatePending } = useUpdateCart();

  useEffect(() => {
    if (cartData) {
      const existingItem = cartData.find(
        (item) => String(item.bookId) === String(id),
      );
      if (existingItem && existingItem.qty) {
        setQuantity(Number(existingItem.qty));
        setCartId(existingItem.cartId);
      } else {
        setCartId(null);
      }
    }
  }, [cartData, id]);

  const handleQuantityChange = (newQty) => {
    setQuantity(newQty);
    if (cartId) {
      updateCartItem({ cartId, qty: newQty });
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full md:w-full md:flex-row">
      <div className="flex gap-4 items-center">
        <BtnCount 
          count={quantity} 
          setCount={handleQuantityChange} 
          isLoading={isUpdatePending} 
        />
      </div>
      <GroubsBtn id={id} quantity={quantity} />
    </div>
  );
}
