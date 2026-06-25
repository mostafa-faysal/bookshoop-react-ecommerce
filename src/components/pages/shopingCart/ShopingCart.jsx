import HeroSection from "../../heroSection/HeroSection";
import BtnShopinCart from "./btnShopinCart/BtnShopinCart";
import CartList from "./cartList/CartList";
import OrderSummary from "./orderSummary/OrderSummary";

export default function ShopingCart() {
  return (
    <section className="mb-5">
      <HeroSection
        heightClass="h-[35vh]"
        showSearch={false}
        showDescription={false}
        showShopNowButton={false}
      />
      <CartList />
      <div className="mb-10">
        <OrderSummary />
      </div>
      <BtnShopinCart />
    </section>
  );
}
