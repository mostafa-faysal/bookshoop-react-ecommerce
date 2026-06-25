import { createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import Contacts from "./components/pages/Contacts";
import Counter from "./components/pages/Counter";
import Test from "./components/pages/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

export default router;
