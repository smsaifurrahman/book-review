import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Routes/Routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
      <ToastContainer />
  </React.StrictMode>,
)
