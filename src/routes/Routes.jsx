import { createBrowserRouter } from "react-router-dom";
import Layout from "../layOut/Layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import News from "../pages/News"
import Destination from '../pages/Destination'
import Blog from "../pages/Blog"
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import SignUp from "../pages/SignUp";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/news",
                element: <News></News>,
            },
            {
                path: "/destination",
                element: <Destination></Destination>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            },
        ]
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/signUp",
        element: <SignUp></SignUp>
    },
])

export default Router;