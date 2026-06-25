import { createBrowserRouter } from 'react-router-dom';
import Router from './Router';
import App from './App';
const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <home />,
        },
    ]
);
export default router;


