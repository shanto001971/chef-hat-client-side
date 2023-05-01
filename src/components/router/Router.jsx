import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Homes/Home";
import HomeLayout from "../Homes/HomeLayout";
import Blog from "../blog/Blog";
import Login from "../login/Login";
import Ragister from "../ragister/Ragister";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<HomeLayout/>,
      children:[
        {
            path:"/",
            element:<Home/>,
        },
        {
            path:"blog",
            element:<Blog/>,
        },
        {
            path:"login",
            element:<Login/>,
        },
        {
            path:"ragister",
            element:<Ragister/>,
        },
      ]
    },
  ]);