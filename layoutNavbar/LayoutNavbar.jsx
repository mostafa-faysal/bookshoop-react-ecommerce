import { Outlet } from "react-router-dom";
import NavBar from "../src/components/navbar/NavBar";
import Footer from "../src/components/footer/Footer";
export default function LayoutNavbar() {
  return (
      <div className="relative">
          <NavBar />
          <Outlet />
          <Footer/>
    </div>
  )
}
