import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import HeroSection from "../../heroSection/HeroSection";
import CategorySlider from "./categorySlider/CategorySlider";
import BooksCart from "./booksCart/BooksCart";
import TotalCheckOut from "../shopingCart/orderSummary/OrderSummary";

export default function Books() {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  useEffect(() => {
    const search = searchParams.get("search") || "";
    setSearchQuery(search);
  }, [searchParams]);
  return (
    <>
      <HeroSection
        heightClass="h-[30vh]"
        showSearch={true}
        showDescription={false}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <CategorySlider
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <BooksCart selectedCategory={selectedCategory} searchQuery={searchQuery} />
    </>
  );
}
