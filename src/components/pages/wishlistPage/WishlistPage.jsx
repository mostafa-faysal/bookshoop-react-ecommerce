import HeroSection from "../../heroSection/HeroSection";
import WishlistCart from "./wishlistCart/WishlistCart";

export default function WishlistPage() {
  return (
    <>
      <HeroSection
        heightClass="h-[35vh]"
        showSearch={false}
        showDescription={false}
        showShopNowButton={false}
      />
      <WishlistCart />
    </>
  );
}
