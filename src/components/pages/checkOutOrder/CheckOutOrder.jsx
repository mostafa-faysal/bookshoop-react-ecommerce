import HeroSection from "../../heroSection/HeroSection";
import CartList from "../shopingCart/cartList/CartList";
import OrderSummary from "../shopingCart/orderSummary/OrderSummary";
import BtnCheckOut from "./btnCheckOut/BtnCheckOut";
import FormCheckOut from "./formCheckOut/FormCheckOut";

export default function CheckOutOrder() {
  return (
    <div className="flex flex-col gap-15">
      <HeroSection heightClass="h-[35vh]" />
      <div className="flex flex-col gap-10 w-full md:flex-row">
        <div className="md:w-[47%] w-full h-full ">
          <FormCheckOut />
        </div>
        <div className="md:w-[55%] w-full h-[87vh] overflow-y-scroll mt-6 pt-0">
          <CartList />
        </div>
      </div>
      <div>
        <OrderSummary />
      </div>
      <BtnCheckOut />
    </div>
  );
}
