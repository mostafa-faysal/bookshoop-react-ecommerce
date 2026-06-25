import { createBrowserRouter } from "react-router";
import Section from './section/Section';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Section/>,
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