import { NavLink } from "react-router-dom";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/books", label: "Books" },
  { to: "/about", label: "About us" },
];

export const navLinkClass = ({ isActive }) =>
  isActive
    ? "text-lg font-semibold text-[#EAA451]"
    : "text-lg font-semibold text-white";

export default function NavMenuLinks({ onClick }) {
  return (
    <>
      {navLinks.map(({ to, label }) => (
        <NavLink key={to} to={to} className={navLinkClass} onClick={onClick}>
          {label}
        </NavLink>
      ))}
    </>
  );
}
