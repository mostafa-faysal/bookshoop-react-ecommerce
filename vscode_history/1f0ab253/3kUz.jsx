import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-100 shadow-md">
      <div className="text-2xl font-bold text-blue-600">
        <h1>logo</h1>
      </div>
      <nav className="flex gap-4">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold"
              : "text-gray-700 hover:text-blue-500"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/users"}
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold"
              : "text-gray-700 hover:text-blue-500"
          }
        >
          users
        </NavLink>
        <NavLink
          to={"/posts"}
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold"
              : "text-gray-700 hover:text-blue-500"
          }
        >
          posts
        </NavLink>
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold"
              : "text-gray-700 hover:text-blue-500"
          }
        >
          Dashboard
        </NavLink>
      </nav>
    </header>
  );
}
