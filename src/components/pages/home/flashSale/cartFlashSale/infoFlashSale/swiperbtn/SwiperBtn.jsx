import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
export default function SwiperBtn() {
  return (
    <>
      <button className="custom-prev absolute -left-14 z-10 w-12 h-12 flex items-center justify-center bg-white text-[#D9176C] rounded-full shadow-lg hover:bg-[#D9176C] hover:text-white transition-colors cursor-pointer border border-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
        <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
      </button>
      <button className="custom-next absolute -right-14 z-10 w-12 h-12 flex items-center justify-center bg-white text-[#D9176C] rounded-full shadow-lg hover:bg-[#D9176C] hover:text-white transition-colors cursor-pointer border border-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
        <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
      </button>
    </>
  );
}
