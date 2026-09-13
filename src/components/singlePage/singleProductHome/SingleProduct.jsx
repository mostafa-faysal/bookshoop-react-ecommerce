"use client";
import { useParams } from "next/navigation";
import { useBook } from "../../../hooks/useBook";
import { useRating } from "../../../hooks/useRating";

import ProductImage from "../../productImage/ProductImage";
import ProductRating from "../../productRating/ProductRating";
import ProductFeatures from "../productFeatures/ProductFeatures";
import ProductActions from "../productActions/ProductActions";
import Loader from "../../ui/loader/Loader";
import ErrorMessage from "../../ui/errorMessage/ErrorMessage";

export default function SingleProduct() {
  const { id } = useParams();
  const {
    data: bookTitle,
    isPending: isBookPending,
    isError: isBookError,
    error: bookError,
  } = useBook(id);

  const {
    data: rateData,
    isPending: isRatePending,
    isError: isRateError,
    error: rateError,
  } = useRating(id);

  const isPending = isBookPending || isRatePending;
  const isError = isBookError || isRateError;
  const error = bookError || rateError;

  return (
    <section>
      <div>
        {isPending ? (
          <Loader height="5rem" />
        ) : isError ? (
          <ErrorMessage message={error?.message} height="5rem" />
        ) : !bookTitle ? (
          <ErrorMessage message="Book not found" height="5rem" />
        ) : (
          <div className="flex flex-col gap-8 justify-between m-4 lg:flex-row lg:m-15">
            <div className="flex justify-center m-auto w-48 h-[40vh]">
              <ProductImage image={bookTitle.image} title={bookTitle.title} />
            </div>
            <div className="p-0 pt-0 w-full lg:w-1/2 card-body lg:p-8">
              <div className="flex flex-col gap-4">
                <h2 className="text-xl card-title lg:text-2xl">
                  {bookTitle.title}
                </h2>
                {bookTitle.category && (
                  <span className="badge badge-primary badge-outline my-1 font-semibold tracking-wide uppercase text-xs">
                    {bookTitle.category}
                  </span>
                )}
                <p className="text-base text-gray-600">
                  {bookTitle.description}
                </p>
                <div className="flex justify-start my-2">
                  <ProductRating rating={rateData?.rating} />
                </div>
                <div className="flex flex-col gap-6 mt-4">
                  <p className="font-semibold text-[#222222] text-[25px] lg:text-3xl">
                    {bookTitle?.price ? Math.round(bookTitle.price) : 0} $
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 justify-start items-start mt-4 w-full lg:w-1/4 lg:justify-between lg:items-end lg:mt-0">
              <ProductFeatures />
              <ProductActions id={id} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
