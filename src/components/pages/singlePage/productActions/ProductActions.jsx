import { useState, useEffect } from "react";
import BtnCount from "../../../btnCount/BtnCount";
import GroubsBtn from "../../../groupsBtn/GroubsBtn";
import { useGetAllItem } from "../../../../hooks/useGetAllItem";

export default function ProductActions({ id }) {
  const [quantity, setQuantity] = useState(1);
  const { data: cartData } = useGetAllItem();
  useEffect(() => {
    if (cartData) {
      const existingItem = cartData.find(
        (item) => Number(item.bookId) === Number(id),
      );
      if (existingItem && existingItem.qty) {
        setQuantity(Number(existingItem.qty));
      }
    }
  }, [cartData, id]);

  return (
    <div className="flex flex-col gap-4 w-full md:w-full md:flex-row">
      <div className="flex gap-4 items-center">
        <BtnCount count={quantity} setCount={setQuantity} />
      </div>
      <GroubsBtn id={id} quantity={quantity} />
    </div>
  );
}
