import { useEffect, useState } from "react";
import useAuthStore from "../store/useAuthStore";
import { useUser } from "./useUser";

export const useNavbar = () => {
  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { data: userInfo, error } = useUser(token);

  return {
    token,
    isMenuOpen,
    userInfo,
    error,
    handleLogout,
    toggleMenu,
    closeMenu,
  };
};
