import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home';
import User from './User';
import Admin from './Admin';
import Owner from './Owner';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {path: '/', element: <Home/>},
  {path: '/user', element: <User/>},
  {path: '/admin', element: <Admin/>},
  {path: '/owner', element: <Owner/>}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
