import { createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";

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

export default router
