import { useCategories } from "../../../../hooks/useCategories";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

export default function CategorySlider({
  selectedCategory,
  setSelectedCategory,
}) {
  const { data, isLoading, error } = useCategories();

  if (isLoading) {
    return;
  }
  if (error) {
    return;
  }

  return (
    <div className="py-4">
      <Swiper
        slidesPerView="auto"
        spaceBetween={10}
        slidesPerGroupSkip={4}
        speed={400}
        centerInsufficientSlides={true}
        snapToSlideEdge={true}
        freeMode={true}
        navigation={true}
        modules={[FreeMode]}
      >
        <SwiperSlide className="!w-auto md:mx-0  mx-10">
          <div
            onClick={() => setSelectedCategory("")}
            className={`cursor-pointer px-4 py-2 rounded-full border transition-all ${
              selectedCategory === ""
                ? "bg-[#D9176C] text-white border-[#615f60]"
                : "bg-white text-black hover:bg-[#D9176C]"
            }`}
          >
            All
          </div>
        </SwiperSlide>

        {data.map((category) => (
          <SwiperSlide
            key={category.categoryId || category.id}
            className="!w-auto"
          >
            <div
              onClick={() => setSelectedCategory(category.name)}
              className={`cursor-pointer px-4 py-2 rounded-full border transition-all ${
                selectedCategory === category.name
                  ? "bg-[#D9176C] text-white border-[#D9176C]"
                  : "bg-white text-black border-[#D9176C] hover:bg-[#D9176C] hover:text-white"
              }`}
            >
              {category.name}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
