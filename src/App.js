import './Assets/Style.css';
import { RouterProvider } from "react-router-dom";
import { Router } from './Routes';
import { Suspense } from 'react';

function App() {
  return (
    <Suspense>
      <RouterProvider router={Router} />
    </Suspense>
  );
}

export default App;