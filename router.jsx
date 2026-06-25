import { createBrowserRouter } from "react-router-dom";
import Home from "./src/components/pages/home/Home";
import LayoutNavbar from "./layoutNavbar/LayoutNavbar";
import ErrorPage from "./src/components/pages/errorPage/ErrorPage";
import Books from "./src/components/pages/books/Books";
import About from "./src/components/pages/about/About";
import SinglePage from "./src/components/pages/singlePage/singleProductHome/SinglePage";
import Login from "./src/components/pages/login/Login";
import Register from "./src/components/pages/register/Register";
import SingleProductBook from "./src/components/pages/singlePage/singleProductBook/SingleProductBook";
import WishlistPage from "./src/components/pages/wishlistPage/WishlistPage";
import ShopingCart from "./src/components/pages/shopingCart/ShopingCart";
import CheckOutOrder from "./src/components/pages/checkOutOrder/CheckOutOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutNavbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/post/:id",
        element: <SinglePage />,
      },
      {
        path: "/books/:id",
        element: <SingleProductBook />,
      },
      {
        path: "/wishlist",
        element: <WishlistPage />,
      },
      {
        path: "/cart",
        element: <ShopingCart />,
      },
      {
        path: "/cart/checkout",
        element: <CheckOutOrder />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
