import { useRating } from "../../../../../../hooks/useRating";
import ProductRating from "../../../../../productRating/ProductRating";
import LoaderInfo from "../../../../../ui/loaderInfo/LoaderInfo";

export default function InfoFlashSale({ book }) {
  const { data: rateData, isLoading } = useRating(book?.id);
  if (isLoading) return <LoaderInfo />;
  const rate = rateData?.rating;
  return (
    <div className="flex p-0">
      <div className="flex flex-col gap-0 md:gap-8">
        <h2 className="text-xl font-bold text-white">
          <span className="line-clamp-2">{book.title}</span>
        </h2>
        <div className="flex flex-col gap-0 md:gap-3">
          <div className="flex justify-start my-2">
            <ProductRating rating={rate} />
          </div>
          <div>
            <progress
              className="w-56 progress text-[#EAA451]"
              value="70"
              max="100"
            ></progress>
            <p className="text-[#FFFFFF80] text-[12px]">4 books left</p>
          </div>
          <div className="flex flex-col md:mt-4 md:gap-1">
            <p className="font-semibold text-[#222222] text-[20px] flex flex-row items-end gap-2 line-clamp-2">
              <span className="text-[#FFFFFF80] line-through text-[14px]">
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
