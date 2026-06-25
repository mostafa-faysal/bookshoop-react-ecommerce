import BtnFlashSale from "./btnFlashSale/BtnFlashSale";
import InfoFlashSale from "./infoFlashSale/InfoFlashSale";
import { useBooks } from "../../../../../hooks/useBooks";
import ProductImage from "../../../../productImage/ProductImage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperBtn from "./infoFlashSale/swiperbtn/SwiperBtn";
import FlashSaleHeader from "./flashSaleHeader/FlashSaleHeader";
import ErrorMessage from "../../../../ui/errorMessage/ErrorMessage";
import Loader from "../../../../ui/loader/Loader";
import { Link } from "react-router-dom";
export default function CartFlashSale() {
  const { data, isLoading, error } = useBooks();
  if (isLoading) return <Loader height="50vh" />;
  if (error) return <ErrorMessage message={error?.message} height="50vh" />;
  const flashSaleBooks = data?.slice(2, 8) || [];
  return (
    <section className="flex flex-col gap-4 py-4 w-full">
      <FlashSaleHeader />
      <div className="relative max-w-[75%] mx-auto flex items-center">
        <SwiperBtn />
        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          className="w-full mySwiper"
        >
          {flashSaleBooks.map((book) => (
            <SwiperSlide key={book.id}>
              <div className="flex flex-col md:flex-row md:gap-5 gap-3 p-4 w-full bg-[#3B2F4A] shadow-sm items-stretch rounded-2xl mx-auto">
                <div className="w-full md:w-[45%] aspect-square rounded-2xl shrink-0 flex items-center justify-center bg-white/5 p-2">
                  <ProductImage
                    image={book.image}
                    title={book.title}
                    id={book.id}
                    imgClassName="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-2 justify-between py-1 w-full md:w-[55%]">
                  <InfoFlashSale book={book} />
                  <BtnFlashSale id={book.id} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
