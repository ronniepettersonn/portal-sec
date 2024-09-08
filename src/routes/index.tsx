import { createBrowserRouter } from "react-router-dom";
import { ComingSoon } from "../pages/ComingSoon";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <ComingSoon />,
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <SignUp />
    }
])