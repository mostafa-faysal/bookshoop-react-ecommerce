import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
export default function SwiperBtn() {
  return (
    <>
      <button className="custom-prev absolute -left-[45px] z-10 w-18 h-12 flex items-center justify-center bg-transparent  rounded-full text-[#D9176C] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
        <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
      </button>
      <button className="custom-next absolute -right-[45px] z-10 w-18 h-12 flex items-center justify-center bg-transparent  rounded-full text-[#D9176C] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
        <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
      </button>
    </>
  );
}
