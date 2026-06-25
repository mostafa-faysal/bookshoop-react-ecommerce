import { createBrowserRouter } from 'react-router-dom';
import Router from './Router';
import Home from './components/pages/home';
const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/",
            element: <Home />,
        },
    ]
);
export default router;


