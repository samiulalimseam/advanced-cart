import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';
import SingleOrder from '../../components/singleOrder/SingleOrder';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const headers= [
        {label:"customer", key: "customerEmail"},
        {label:"customer name", key: "customerName"},
        {label:"Number", key: "customerNumber"},
        {label:"Products", key: "products"},
    ]



    //  get orders from database
    useEffect(()=>{

        fetch('https://advanced-cart-server-fixed-samiulalimseam.vercel.app/orders')
        .then(res => res.json())
        .then(data=> setOrders(data))
        .catch(err => console.error(err))
    },[])


    return (
        <div>
            <h1>Order management</h1>
            <div className="stats shadow m-3">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Orders</div>
                    <div className="stat-value text-primary">{orders?.length}</div>
                    <div className="stat-desc">21% more than last month</div>
                    <CSVLink className='btn btn-xs btn-warning' headers={headers} data={orders}>Export</CSVLink>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Shop Order</div>
                    <div className="stat-value text-secondary">0</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img alt='' src="https://cdn.shopify.com/s/files/1/0583/9971/9619/files/fav-w_32x32.png?v=1627576696" />
                            </div>
                        </div>
                    </div>
                    <div className="stat-title">Other Order</div>
                    <div className="stat-value">0</div>
                    <div className="stat-desc text-secondary">31 tasks remaining</div>
                </div>

            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className='flex justify-between'>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Products</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                       {orders.map(order=> {
                        return <SingleOrder order={order}></SingleOrder>
                       })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;