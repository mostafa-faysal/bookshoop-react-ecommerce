import { useRating } from "../../../../../../hooks/useRating";
import ProductRating from "../../../../../productRating/ProductRating";
import LoaderInfo from "../../../../../ui/loaderInfo/LoaderInfo";
import ErrorMessage from "../../../../../ui/errorMessage/ErrorMessage";

export default function InfoFlashSale({ book }) {
  const { data: rateData, isLoading, error } = useRating(book?.id);
  if (isLoading) return <LoaderInfo />;
  if (error) return <ErrorMessage message={error?.message} />;
  const rate = rateData?.rating;
  return (
    <div className="flex p-0">
      <div className="flex flex-col gap-0 md:gap-8 md:flex-col">
        <div className="flex flex-col gap-0 md:gap-1">
          <h2 className="text-xl font-bold text-[#222222]">{book.title}</h2>
          <p className="text-[#22222280]  text-[14px] line-clamp-4">
            {book.description}
          </p>
        </div>

        <div className="flex flex-col gap-0 md:gap-3">
          <div className="flex justify-between my-2">
            <ProductRating rating={rate} />
            <p className="font-semibold text-[#222222] text-[26px] flex flex-row items-end gap-2 line-clamp-2">
              {book?.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
