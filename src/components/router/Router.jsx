import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Homes/Home";
import HomeLayout from "../Homes/HomeLayout";
import Blog from "../blog/Blog";
import Login from "../login/Login";
import Ragister from "../ragister/Ragister";
import ViewDetails from "../viewDetails/ViewDetails";
import PraivetRoute from "../PraivetRoute/PraivetRoute";
import ErrorPage from "../errorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "ragister",
        element: <Ragister />,
      },
      {
        path: "data/:id",
        element: <PraivetRoute>
          <ViewDetails />
        </PraivetRoute>,
        loader: ({ params }) => fetch(` https://make-chef-sarver-site-shanto001971.vercel.app/data/${params.id}`)
      },
    ]
  },
]);