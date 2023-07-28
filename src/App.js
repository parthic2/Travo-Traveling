import './Assets/Style.css';
import './Assets/Animation.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from './Components/Index';
import RootLayout from './RootLayout/RootLayout';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import About1 from './Pages/About/About1';
import Portfolio from './Pages/Portfolio/Portfolio';
import About2 from './Pages/About/About2';
import About3 from './Pages/About/About3';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, path: "/", element: <Index /> }],
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

function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;