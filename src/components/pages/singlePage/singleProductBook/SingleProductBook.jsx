import HeroSection from "../../../heroSection/HeroSection";
import BookData from "./bookData/BookData";

export default function SingleProductBook() {
  return (
    <>
      <HeroSection
        heightClass="h-[35vh]"
        showSearch={false}
        showDescription={false}
      />
      <BookData />
    </>
  );
}
