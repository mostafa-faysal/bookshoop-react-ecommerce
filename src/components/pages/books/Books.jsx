import { useState } from "react";
import HeroSection from "../../heroSection/HeroSection";
import CategorySlider from "./categorySlider/CategorySlider";
import BooksCart from "./booksCart/BooksCart";
import TotalCheckOut from "../shopingCart/orderSummary/OrderSummary";

export default function Books() {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <>
      <HeroSection
        heightClass="h-[30vh]"
        showSearch={false}
        showDescription={false}
      />
      <CategorySlider
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <BooksCart selectedCategory={selectedCategory} />
    </>
  );
}
