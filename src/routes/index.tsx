import { createBrowserRouter } from "react-router-dom";
import { ComingSoon } from "../pages/ComingSoon";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { GrupoFamiliar } from "../pages/GrupoFamiliar";
import { SouNovo } from "../pages/SouNovo";
import { Ofertas } from "../pages/Ofertas";

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
    },
    {
        path: '/dashboard',
        element: <Dashboard />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/grupofamiliar',
        element: <GrupoFamiliar />
    },
    {
        path: '/sounovo',
        element: <SouNovo />
    },
    {
        path: '/oferta',
        element: <Ofertas />
    }
])