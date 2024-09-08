import { createBrowserRouter } from "react-router-dom";
import { ComingSoon } from "../pages/ComingSoon";
import { Login } from "../pages/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <ComingSoon />,
    },
    {
        path: '/login',
        element: <Login />
    }
])