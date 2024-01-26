import React from 'react';
import ReactDOM from 'react-dom/client';

// Pages
import Index from './pages/Index';
import About from './pages/About';
import Services from './pages/Services';
import Work from './pages/Work';

// Router Setup
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/work",
    element: <Work />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);