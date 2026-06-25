import { createBrowserRouter } from 'react-router-dom';
import Router from './Router';
const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Router />,
        },
    ]
);
export default router;


