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
              <div className="flex flex-col md:flex-row md:gap-4 gap-0 p-4 md:p-6 w-full bg-[#3B2F4A] shadow-sm items-stretch h-auto md:h-[48vh] rounded-2xl mx-auto">
                <div className="w-full md:w-[40%] h-[45vh] md:h-auto rounded-2xl shrink-0">
                  <ProductImage
                    image={book.image}
                    title={book.title}
                    id={book.id}
                  />
                </div>
                <div className="flex flex-col gap-0 justify-between pt-2 w-full md:gap-4">
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
