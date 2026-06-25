import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from './pages/home/Home';
import Login from "./pages/login/Login";
import About from './pages/about/About';

const router = createBrowserRouter([
        path: "/",
        element: <Section/>,
    },
    {
        path: "/about",
        element: <About/> ,
    },
    {
        path: "/login",
        element: <Login/>   ,
    },
]);

export default router