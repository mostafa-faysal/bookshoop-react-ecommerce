import { createBrowserRouter } from 'react-router-dom';
import Router from './Router';
const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Ap />,
        },
    ]
);
export default router;


