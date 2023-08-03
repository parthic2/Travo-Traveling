import { createBrowserRouter } from "react-router-dom";
import Index from './Components/Index';
import RootLayout from './RootLayout/RootLayout';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import About1 from './Pages/About/About1/About1';
import Portfolio from './Pages/Portfolio/Portfolio';
import About2 from './Pages/About/About2/About2';
import About3 from './Pages/About/About3/About3';

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