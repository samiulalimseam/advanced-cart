
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import { Oval } from 'react-loader-spinner';
import UniqueModelsBySize from '../../components/UniqueModelBySize/UniqueModelBySize';

const Inventory = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    let modelsSet = new Set();
    let sizeSet = new Set();
    let sizeWiseProduct = [];
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
    // getting  unique model names and stores in an array
    products.map(product => modelsSet.add(product?.Model))
    products.map(product => sizeSet.add(product?.Size))



    let modelsArray = Array.from(modelsSet);
    let sizeArray = Array.from(sizeSet);

        





    if (loading) {
        return <div className='m-auto w-full'>
            <div className="spinner m-auto w-12">

                <Oval color='red' />
            </div>
        </div>
    }


    return (
        <div>
            <div className="stats m-2 bg-primary flex  md:flex-row md:w-[80%] mx-auto flex-col justify-center items-center text-primary-content">

                <div className="stat">
                    <div className="stat-title">In Stock</div>
                    <div className="stat-value">{
                        products.length - products.filter(product => product.isSoldOut === true).length
                    }</div>
                    <div className="stat-title">Sold</div>
                    <div className="stat-value">{
                        products.filter(product => product.isSoldOut === true).length
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

                <div className="relative m-2 p-4 overflow-hidden text-gray-700 bg-white shadow-lg rounded-xl w-60 md:w-72 dark:bg-gray-800 dark:text-gray-100">
                    <a href="#" className="block w-full h-full">
                        <div className="w-full">
                            <p className="mb-4 text-2xl font-light text-gray-700 dark:text-white">
                                Task Progress
                            </p>
                            <div className="flex items-center justify-between text-sm text-gray-400">
                                <p>
                                    Design
                                </p>
                                <p>
                                    3/8
                                </p>
                            </div>
                            <div className="w-full h-2 mb-4 bg-green-100 rounded-full">
                                <div className="w-1/3 h-full text-xs text-center text-white bg-green-400 rounded-full">
                                </div>
                            </div>
                            <div className="flex items-center justify-between text-sm text-gray-400">
                                <p>
                                    Development
                                </p>
                                <p>
                                    6/10
                                </p>
                            </div>
                            <div className="w-full h-2 mb-4 bg-indigo-100 rounded-full">
                                <div className="w-2/3 h-full text-xs text-center text-white bg-indigo-400 rounded-full">
                                </div>
                            </div>
                            <div className="flex items-center justify-between text-sm text-gray-400">
                                <p>
                                    DevOps
                                </p>
                                <p>
                                    2/8
                                </p>
                            </div>
                            <div className="w-full h-2 mb-4 bg-blue-100 rounded-full">
                                <div className="w-1/4 h-full text-xs text-center text-white bg-blue-400 rounded-full">
                                </div>
                            </div>
                            <div className="flex items-center justify-between text-sm text-gray-400">
                                <p>
                                    Marketing
                                </p>
                                <p>
                                    8/8
                                </p>
                            </div>
                            <div className="w-full h-2 bg-pink-100 rounded-full">
                                <div className="w-full h-full text-xs text-center text-white bg-pink-400 rounded-full">
                                </div>
                            </div>
                        </div>
                    </a>
                </div>



                {/* ------------------------------------------ */}



                <div className="p-4 m-2 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
                    <div className="flex items-center">
                        <span className="relative p-4 bg-purple-200 rounded-xl">
                            <svg width="40" fill="currentColor" height="40" className="absolute h-4 text-purple-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z">
                                </path>
                            </svg>
                        </span>
                        <p className="ml-2 text-black text-md dark:text-white">
                            Finance
                        </p>
                    </div>
                    <div className="flex flex-col justify-start">
                        <p className="my-4 text-4xl font-bold text-left text-gray-700 dark:text-gray-100">
                            34,500
                            <span className="text-sm">
                                $
                            </span>
                        </p>
                        <div className="flex items-center text-sm text-green-500">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z">
                                </path>
                            </svg>
                            <span>
                                5.5%
                            </span>
                            <span className="text-gray-400">
                                vs last month
                            </span>
                        </div>
                    </div>
                </div>



            </div>
            {/* Unique model by size -------------------- */}
            <div className='mx-auto w-96 my2' >
                <p className='text-lg m-auto w-96'>Products Variation Counts</p>

                <div className='stats m-2 bg-primary flex  md:flex-row md:w-[80%] mx-auto flex-col justify-center items-center text-primary-content'>
                    <p>Models:{Array.from(modelsSet).length}</p>



                </div>
            </div>
            <p>
                {/* MOdel wise product count */}

                {
                    modelsArray.map(model => {
                        return <p>Model: {model} count: {
                            products.filter(product => product.Model === model).map(unProduct => {
                                sizeArray.forEach(size)
                            })
                        }</p>
                    })
                    
                }
            </p>



        </div>
    );
};

export default Inventory;