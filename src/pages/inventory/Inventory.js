
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import { Oval } from 'react-loader-spinner';

const Inventory = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    let headers = [
        { label: "Id", key: "Id" },
        { label: "Model", key: "Model" },
        { label: "Size", key: "Size" },
        { label: "MRP", key: "MRP" },
        { label: "Location", key: "Location" },
        { label: "Sold Oout", key: "isSoldOut" },
    ];

    let data = products;

    useEffect(() => {
        setLoading(true);
        fetch('https://advanced-cart-server-fixed.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
            .catch(err => console.error(err))
    }, [])

    if (loading) {
        return  <div className='m-auto w-full'>
        <div className="spinner m-auto w-12">

            <Oval color='red' />
        </div>
    </div>
    }


    return (
        <div>
            <div className="stats bg-primary text-primary-content">

                <div className="stat">
                    <div className="stat-title">In Stock</div>
                    <div className="stat-value">{
                        products.filter(product => !product.isSoldout).length
                    }</div>
                    <div className="stat-actions">
                        <Link to={`/add-product`} className="btn btn-sm btn-success">Add Product</Link>
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-title">Current balance</div>
                    <div className="stat-value">$89,400</div>
                    <div className="stat-actions">
                        <CSVLink data={data} filename={`zays-inventory ${new Date()}.csv`} headers={headers} className="btn btn-sm m-2">Export</CSVLink>
                        <button className="btn btn-sm m-2">Import</button>
                    </div>

                </div>

            </div>



        </div>
    );
};

export default Inventory;