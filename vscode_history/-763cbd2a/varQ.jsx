import { createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";

const router = createBrowserRouter([
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
])
        {
          path: "/contacts",
          element: < />,
        },
])

export default router
