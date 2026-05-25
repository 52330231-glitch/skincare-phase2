import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import SkinTypes from './pages/SkinTypes';
import GllowChallenge from './pages/GllowChallenge';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/skin-types", element: <SkinTypes /> },
      { path: "/gllow-challenge", element: <GllowChallenge /> },
      { path: "/contact", element: <Contact /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);