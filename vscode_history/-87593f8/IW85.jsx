import { createBrowserRouter } from 'react-router-dom';
import Router from './Router';
import home from './components/pages/home';
const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <home />,
        },
    ]
);
export default router;


