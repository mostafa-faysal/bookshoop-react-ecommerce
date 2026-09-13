import Link from "next/link";
import { usePathname } from "next/navigation";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/books", label: "Books" },
  { to: "/about", label: "About us" },
];

export const navLinkClass = (isActive) =>
  isActive
    ? "text-lg font-semibold text-[#EAA451]"
    : "text-lg font-semibold text-white";

export default function NavMenuLinks({ onClick }) {
  const pathname = usePathname();
  
  return (
    <>
      {navLinks.map(({ to, label }) => {
        // Simple active check. Handle root path exact match, and other paths prefix match.
        const isActive = to === "/" ? pathname === "/" : pathname?.startsWith(to);
        return (
          <Link key={to} href={to} className={navLinkClass(isActive)} onClick={onClick}>
            {label}
          </Link>
        );
      })}
    </>
  );
}
