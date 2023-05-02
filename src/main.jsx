import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";

import './index.css'
import { router } from './components/router/Router';
import AuthProvaider from './components/AuthProvaiders/AuthProvaider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvaider>
    <RouterProvider router={router} />
    </AuthProvaider>
  </React.StrictMode>,
)
