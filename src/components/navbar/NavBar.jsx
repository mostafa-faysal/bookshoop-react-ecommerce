import NavLogo from "./navLogo/NavLogo";
import NavMenuLinks from "./navMenuLinks/NavMenuLinks";
import NavIcons from "./navIcons/NavIcons";
import UserDropdown from "./userDropdown/UserDropdown";

import MobileMenuButton from "./mobileMenuButton/MobileMenuButton";
import { useNavbar } from "../../hooks/useNavbar";
import AuthButtons from "../authButtons/AuthButtons";

export default function NavBar() {
  const { token, isMenuOpen, userInfo, handleLogout, toggleMenu, closeMenu } =
    useNavbar();
  return (
    <nav
      className={`absolute top-0 left-0 z-50 w-full bg-[#FFFFFF33] shadow-none transition-all duration-300 ${
        isMenuOpen ? "pb-4 md:pb-0" : ""
      }`}
    >
      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex gap-2 items-center sm:gap-4">
          <NavLogo />

          <div className="hidden gap-5 items-center mx-4 md:flex">
            <NavMenuLinks />
          </div>

          {token && (
            <div className="flex gap-1 items-center md:hidden">
              <NavIcons />
            </div>
          )}
        </div>

        <div className="hidden gap-2 items-center md:flex">
          {token ? (
            <>
              <NavIcons />
              <UserDropdown
                userInfo={userInfo}
                handleLogout={handleLogout}
                showDetails={true}
              />
            </>
          ) : (
            <AuthButtons />
          )}
        </div>

        <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>

      {isMenuOpen && (
        <div className="px-4 pt-1 border-t border-white/20 md:hidden">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <NavMenuLinks onClick={closeMenu} />
            </div>

            {!token ? (
              <AuthButtons isMobile={true} />
            ) : (
              <div className="flex justify-end">
                <UserDropdown
                  userInfo={userInfo}
                  handleLogout={handleLogout}
                  showDetails={false}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
