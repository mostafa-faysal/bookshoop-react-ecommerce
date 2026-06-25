import { useRating } from "../../../../../../hooks/useRating";
import ProductRating from "../../../../../productRating/ProductRating";
import LoaderInfo from "../../../../../ui/loaderInfo/LoaderInfo";

export default function InfoFlashSale({ book }) {
  const { data: rateData, isLoading } = useRating(book?.id);
  if (isLoading) return <LoaderInfo />;
  const rate = rateData?.rating;
  return (
    <div className="flex p-0">
      <div className="flex flex-col gap-2 md:gap-3">
        <h2 className="text-lg md:text-xl font-bold text-white leading-tight">
          <span className="line-clamp-2">{book.title}</span>
        </h2>
        <div className="flex flex-col gap-2">
          <div className="flex justify-start">
            <ProductRating rating={rate} />
          </div>
          <div className="flex flex-col gap-1">
            <progress
              className="w-full max-w-[14rem] progress text-[#EAA451] h-1.5"
              value="70"
              max="100"
            ></progress>
            <p className="text-[#FFFFFF80] text-[11px] md:text-xs">4 books left</p>
          </div>
          <div className="flex flex-col mt-1">
            <p className="font-semibold text-[#222222] text-[18px] md:text-[20px] flex flex-row items-end gap-2 line-clamp-1">
              <span className="text-[#FFFFFF80] line-through text-[13px] md:text-[14px]">
                {book?.price}
              </span>
              <span className="text-white">
                {parseFloat(book?.price)
                  ? (parseFloat(book?.price) * 0.8).toFixed(2) + " $"
                  : book?.price}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
