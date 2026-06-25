import GroubsBtn from "../../../groupsBtn/GroubsBtn";
import { useHandleProductClick } from "../../../../hooks/useHandleProductClick";

export default function BookListItem({ book }) {
  const HandleProductClick = useHandleProductClick();

  return (
    <div className="flex flex-col md:flex-row overflow-hidden border shadow-sm rounded-2xl bg-base-100 border-base-200 w-full md:h-[220px]">
      {/* Image Container */}
      <div 
        className="w-full md:w-[220px] h-[250px] md:h-full shrink-0 p-4 bg-white flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
        onClick={() => HandleProductClick(book)}
      >
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content Container */}
      <div className="flex-1 p-5 md:p-6 flex flex-col justify-between">
        {/* Title & Description */}
        <div className="flex flex-col gap-2 mb-4 md:mb-0">
          <h2 className="text-xl font-bold line-clamp-1 text-gray-800">
            {book.title}
          </h2>
          <p
            className="text-gray-500 line-clamp-2 text-sm leading-relaxed"
            title={book.description}
          >
            {book.description}
          </p>
        </div>

        {/* Controls & Pricing */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mt-auto">
          {/* Price */}
          <div className="flex flex-col items-start gap-1">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Price
            </span>
            <span className="text-lg font-bold text-gray-800">
              ${book.price}
            </span>
          </div>

          {/* Actions */}
          <div className="flex flex-row items-center justify-between w-full sm:w-auto gap-4 md:gap-6">
            <GroubsBtn id={book.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
