import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from '../layout/Main';
import Cart from '../pages/Cart';
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
    
])


export default siteRoutes;