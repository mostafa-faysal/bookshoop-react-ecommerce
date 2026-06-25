import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <section,
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