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
        path: "/login",
        element: <div>login</div>,
    },
]);

export default router