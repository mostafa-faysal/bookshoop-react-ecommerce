import { Link } from "react-router-dom";

export default function AuthButtons({ isMobile = false }) {
  if (isMobile) {
    return (
      <div className="flex flex-col gap-2">
        <Link to="/login" className="btn btn-active btn-secondary">
          Login
        </Link>
        <Link
          to="/register"
          className="btn btn-secondary btn-outline bg-white text-[#D9176C]"
        >
          register
        </Link>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      <Link to="/login" className="btn btn-active btn-secondary text-[16px]">
        Login
      </Link>
      <Link
        to="/register"
        className="btn btn-secondary btn-outline bg-white text-[#D9176C] text-[16px]"
      >
        register
      </Link>
    </div>
  );
}
