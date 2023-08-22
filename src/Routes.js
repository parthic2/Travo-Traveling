import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
const RootLayout = lazy(() => import('./RootLayout/RootLayout'));
const Services = lazy(() => import('./Pages/Services/Services'));
const Contact = lazy(() => import('./Pages/Contact/Contact'));
const About1 = lazy(() => import('./Pages/About/About1/About1'));
const Portfolio = lazy(() => import('./Pages/Portfolio/Portfolio'));
const About2 = lazy(() => import('./Pages/About/About2/About2'));
const About3 = lazy(() => import('./Pages/About/About3/About3'));
const Index = lazy(() => import("./Components/Index"));

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [{ path: "/", element: <Index /> }],
    },
    {
        path: "/About_1",
        element: <About1 />
    },
    {
        path: "/About_2",
        element: <About2 />
    },
    {
        path: "/About_3",
        element: <About3 />
    },
    {
        path: "/Service",
        element: <Services />
    },
    {
        path: "/Portfolio",
        element: <Portfolio />
    },
    {
        path: "/Contact",
        element: <Contact />
    }
]);