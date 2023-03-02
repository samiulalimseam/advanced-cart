import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from '../layout/Main';
import AddProduct from '../pages/AddProduct/AddProduct';
import Cart from '../pages/Cart';
import Login from '../pages/login/Login';
import Shop from '../pages/Shop';
import PrivateRoute from './PrivateRoute';

const siteRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <PrivateRoute> <Shop></Shop></PrivateRoute>
            },
            {
                path: "/cart",
                element:<PrivateRoute> <Cart></Cart> </PrivateRoute>
            },
            {
                path: "/add-product",
                element:<PrivateRoute> <AddProduct></AddProduct> </PrivateRoute>
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