import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from '../layout/Main';
import Cart from '../pages/Cart';
import Login from '../pages/login/Login';
import Shop from '../pages/Shop';

const siteRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Shop></Shop>
            },
            {
                path: "/cart",
                element: <Cart></Cart>
            },

        ]
        
    },
    {       
        // private route
        path: "/login",
        element: <Login></Login>
    },
    
])


export default siteRoutes;