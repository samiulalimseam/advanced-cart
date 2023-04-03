import React from 'react';
import { useLoaderData } from 'react-router-dom';

const OrderPrint = () => {
    const order = useLoaderData();
    console.log(order);
    
    return (
        <div className='w-96 m-auto text-left'>
            <p>Name: {order.customerName}</p>
            <p>Email:  {order.customerEmail}</p>
            <p>Phone:  {order.customerNumber}</p>
            Products: {
            order?.products?.map(product=> {
                return <div key={product.Id}>
                    {product.Id}
                    {product.Location}
                </div>
            })
            }
        </div>
    );
};

export default OrderPrint;