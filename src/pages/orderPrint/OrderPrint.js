import React from 'react';
import { useLoaderData } from 'react-router-dom';

const OrderPrint = () => {
    const order = useLoaderData();
    
    return (
        <div className='w-96 m-auto text-left'>
            <p> {order.customerName}</p>
            <p> {order.customerEmail}</p>
            <p> {order.customerNumber}</p>
        </div>
    );
};

export default OrderPrint;