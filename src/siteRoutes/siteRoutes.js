import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from '../layout/Main';
import AddProduct from '../pages/AddProduct/AddProduct';
import Cart from '../pages/Cart';
import Inventory from '../pages/inventory/Inventory';
import Login from '../pages/login/Login';
import OrderPrint from '../pages/orderPrint/OrderPrint';
import Orders from '../pages/orders/Orders';
import Shop from '../pages/Shop';
import PrivateRoute from './PrivateRoute';
import Restock from '../pages/Restock/Restock';

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
            {
                path: "/orders",
                element:<PrivateRoute> <Orders></Orders> </PrivateRoute>
            },
            {
                path: "/inventory",
                element:<PrivateRoute> <Inventory></Inventory> </PrivateRoute>
            },
            
            {
                path: "/restock",
                element:<PrivateRoute> <Restock></Restock> </PrivateRoute>
            },
            {
                path: "/print/:id",
                element:<PrivateRoute> <OrderPrint></OrderPrint> </PrivateRoute>,
                loader: ({ params }) => fetch(`https://advanced-cart-server-fixed-samiulalimseam.vercel.app/getorder/${params.id}`)
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