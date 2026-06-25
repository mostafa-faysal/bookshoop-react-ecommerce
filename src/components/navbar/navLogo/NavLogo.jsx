import { Link } from "react-router-dom";

export default function NavLogo() {
  return (
    <div className="flex items-center">
      <img src="/navbar/book.png" alt="logo" className="w-7 h-8" />
      <Link
        to="/"
        className="px-3 text-base font-normal text-white rounded-r-none border-r-2 border-r-gray-300 sm:px-4"
      >
        Bookshop
      </Link>
    </div>
  );
}
