import { create } from "zustand";
import Cookies from "js-cookie";

const useAuthStore = create((set) => ({
  token: Cookies.get("token") || null,
  setToken: (newToken) => {
    Cookies.set("token", newToken);
    set({ token: newToken });
  },
  logout: () => {
    Cookies.remove("token");
    set({ token: null });
  },
}));

export default useAuthStore;

