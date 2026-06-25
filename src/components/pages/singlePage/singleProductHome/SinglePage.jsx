import HeroSection from "../../../heroSection/HeroSection";
import SingleProduct from "./SingleProduct";

export default function SinglePage() {
  return (
    <section>
      <HeroSection
        heightClass="h-[35vh]"
        showSearch={false}
        showDescription={false}
      />
      <SingleProduct />
    </section>
  );
}
