import GroubsBtn from "../../../groupsBtn/GroubsBtn";
import { useHandleProductClick } from "../../../../hooks/useHandleProductClick";

export default function BookListItem({ book }) {
  const HandleProductClick = useHandleProductClick();

  return (
    <div className="flex flex-col md:flex-row overflow-hidden border shadow-sm rounded-2xl bg-base-100 border-base-200 w-full md:h-[220px]">
      <div
        className="w-full md:w-[220px] h-[250px] md:h-full shrink-0 p-4 bg-white flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
        onClick={() => HandleProductClick(book)}
      >
        <img
          src={book.image}
          alt={book.title}
          className="object-contain w-full h-full"
        />
      </div>

      <div className="flex flex-col flex-1 justify-between p-5 w-full md:p-6">
        <div className="flex flex-col gap-2 mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-gray-800 line-clamp-1">
            {book.title}
          </h2>
          <p
            className="text-sm leading-relaxed text-gray-500 line-clamp-2"
            title={book.description}
          >
            {book.description}
          </p>
        </div>

        <div className="flex flex-col gap-6 justify-between items-start mt-auto sm:flex-row sm:items-end">
          <div className="flex flex-col gap-1 items-start">
            <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Price
            </span>
            <span className="text-lg font-bold text-gray-800">
              ${book.price}
            </span>
          </div>

          <div className="flex flex-row gap-4 justify-between items-center w-full sm:w-auto md:gap-6">
            <GroubsBtn id={book.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
