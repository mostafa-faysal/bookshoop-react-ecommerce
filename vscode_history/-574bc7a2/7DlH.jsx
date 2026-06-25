import { createBrowserRouter } from "react-router";
import Section from './section/Section';
import Login from "./pages/login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Section/>,
    },
    {
        path: "/about",
        element: ,
    },
    {
        path: "/login",
        element: <Login/>   ,
    },
]);

export default router