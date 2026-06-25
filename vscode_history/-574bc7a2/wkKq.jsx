import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Home</div>,
    },
    {
        path: "/about",
        element: <div>About</div>,
    },
    {
        path: "/contact",
        element: <div>Contact</div>,
    },
]);

export default router