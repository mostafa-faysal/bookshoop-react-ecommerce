import RecomendedCart from "./recomendedCart/RecomendedCart";
import RecomendedHeader from "./recomendedHeader/RecomendedHeader";

export default function Recomended() {
  return (
    <section className="flex flex-col gap-4 h-full mt-30">
      <RecomendedHeader />
      <RecomendedCart />
    </section>
  );
}
