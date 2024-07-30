import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import About_o from './pages/about/About_o.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Services from './pages/services_page/Services.jsx'
import Project_page from './pages/project/Project_page.jsx'

import Donut_page from './pages/projects_pages/Donut_page.jsx'
import Sward from './pages/projects_pages/Sward.jsx'
import Usual from './pages/projects_pages/Usual.jsx'
import Sprit from './pages/projects_pages/Sprit.jsx'
import Skull from './pages/projects_pages/Skull.jsx'

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
  },
  {
    path: "/project/donut",
    element: <Donut_page/>
  },
  {
    path: "/project/sword",
    element: <Sward/>
  },
  {
    path: "/project/usual",
    element: <Usual/>
  },
  {
    path: "/project/sprit",
    element: <Sprit/>
  },
  {
    path: "/project/skull",
    element: <Skull/>
  }





]);


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <RouterProvider router={router} />
);