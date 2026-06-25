import { createBrowserRouter } from 'react-router-dom';
import Router from './Router';
const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home />,
        },
    ]
);
export default router;


