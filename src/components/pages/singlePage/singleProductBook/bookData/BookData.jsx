import { useParams } from "react-router-dom";
import ProductImage from "../../../../productImage/ProductImage";
import ProductRating from "../../../../productRating/ProductRating";
import ProductFeatures from "../../productFeatures/ProductFeatures";
import ProductActions from "../../productActions/ProductActions";
export default function BookData() {
  const { id } = useParams();
  const getData = JSON.parse(localStorage.getItem(`${id}`));
  return (
    <div>
      <div className="flex flex-col gap-8 justify-between m-4 lg:flex-row lg:m-15">
        <div className="flex justify-center m-auto w-3/4 lg:w-1/4">
          <ProductImage image={getData.image} title={getData.title} />
        </div>
        <div className="p-0 pt-0 w-full lg:w-1/2 card-body lg:p-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl card-title lg:text-2xl">{getData.title}</h2>
            <p className="text-base text-gray-600">{getData.description}</p>
            <div className="flex justify-start my-2">
              <ProductRating rating={4.7} />
            </div>
            <div className="flex flex-col gap-6 mt-4">
              <p className="font-semibold text-[#222222] text-[25px] lg:text-3xl">
                {getData?.price}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 justify-start items-start mt-4 w-full lg:w-1/4 lg:justify-between lg:items-end lg:mt-0">
          <ProductFeatures />
          <ProductActions id={id} />
        </div>
      </div>
    </div>
  );
}
