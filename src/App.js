import './Assets/Style.css';
import './Assets/Animation.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from './Components/Index';
import RootLayout from './RootLayout/RootLayout';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, path: "/", element: <Index /> }],
  },
  {
    path: "/About",
    element: <About />
  },
  {
    path: "/Service",
    element: <Services />
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