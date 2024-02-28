import { createBrowserRouter } from "react-router-dom";
import Layouts from "./Layouts";
import CreateUsers from './CreateUsers'
import Users from './Users'
import EditUsers from './EditUsers'
import NotFound from './NotFound'
import AllUsers from "./AllUsers";
import Register from "../authentication/Register";
import Login from "../authentication/Login";
export const router = createBrowserRouter([
    {
        path:'/',
        element: <Layouts/>,
        children:[
            {
                path:'/',
                element: <CreateUsers/>
            },
            {
                path:'/users',
                element: <Users/>
            },
            {
                path:'/editusers/:id',
                element: <EditUsers/>
            },
            {
                path:'/allusers',
                element: <AllUsers/>
            },
            {
                path:'/register',
                element: <Register/>
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'*',
                element: <NotFound/>
            }
        ]
    }
])