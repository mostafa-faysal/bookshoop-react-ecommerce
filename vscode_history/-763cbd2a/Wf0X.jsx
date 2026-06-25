import { createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import contacts from './components/pages/Contacts';

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
          element: <contacts />,
        },
])

export default router
