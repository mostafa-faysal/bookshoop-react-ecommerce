import { Link, useLocation } from "react-router-dom";

export default function AuthButtons({ isMobile = false, onClick }) {
  const { pathname } = useLocation();

  if (pathname === "/login" || pathname === "/register") {
    return null;
  }

  if (isMobile) {
    return (
      <div className="flex flex-col gap-2">
        <Link to="/login" className="btn btn-active btn-secondary" onClick={onClick}>
          Login
        </Link>
        <Link
          to="/register"
          className="btn btn-secondary btn-outline bg-white text-[#D9176C]"
          onClick={onClick}
        >
          register
        </Link>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      <Link to="/login" className="btn btn-active btn-secondary text-[16px]" onClick={onClick}>
        Login
      </Link>
      <Link
        to="/register"
        className="btn btn-secondary btn-outline bg-white text-[#D9176C] text-[16px]"
        onClick={onClick}
      >
        register
      </Link>
    </div>
  );
}
