import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import About_o from './pages/about/About_o.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Services from './pages/services_page/Services.jsx'
import Project_page from './pages/project/Project_page.jsx'


import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <About_o/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/services",
    element: <Services/>
  },
  {
    path: "/project",
    element: <Project_page/>
  }

]);


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <RouterProvider router={router} />
);