import { Link } from "react-router-dom";

export default function UserDropdown({
  userInfo,
  handleLogout,
  showDetails = false,
}) {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="px-1 cursor-pointer hover:bg-transparent focus:bg-transparent">
        <div className="flex gap-1 items-center">
          <div className="avatar indicator">
            <div className="w-10 rounded-full bg-[#D9176C] flex justify-center items-center">
              <p className=" text-white text-[20px] font-bold">
                {userInfo?.name?.[0]}
              </p>
              <span className="absolute bottom-8 left-7 h-[10px] w-[10px] rounded-full border border-white bg-[#25D994]" />
            </div>
          </div>
          {showDetails && (
            <div className="flex flex-col items-start">
              <h2 className="text-[16px] text-white font-semibold">
                {userInfo?.name}
              </h2>
              <p className="text-[#FFFFFF80] font-light text-sm">
                {userInfo?.email}
              </p>
            </div>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="text-white size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      <ul
        tabIndex={-1}
        className="z-50 p-2 mt-3 w-52 shadow menu menu-sm dropdown-content rounded-box bg-base-100"
      >
        <li>
          <Link to="/" onClick={handleLogout}>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}
