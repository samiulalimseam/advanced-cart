import React, { useContext, useEffect, useState } from 'react';
import ProductCard from '../components/productCard/ProductCard';
import { Form, Link } from "react-router-dom";
import { ShopContext } from '../context/ShopContext';
import { Oval } from 'react-loader-spinner';
import { AuthContextProvider } from '../context/AuthContextProvider';

const Shop = () => {
    const [search, setSearch] = useState('')
    const { cartArray } = useContext(ShopContext);
    
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);

    

    const getData = (val) => {
        setSearch(val.target.value)
    }

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
        return (
            <div className='m-auto w-full'>
                <div className="spinner m-auto w-12">

                    <Oval color='red' />
                </div>
            </div>
        )
    }
    return (
        <div className='shop'>
            <p className="header m-5">
                Products in the <Link to={`/cart`} className='p-2 m-1 bg-yellow-400 rounded'>Cart</Link> : {cartArray.length}
            </p>

            <input onChange={getData} className='border rounded w-96 h-12' type="text" />
            <div className="products w-96 m-auto">
                
                {
                    products?.filter(product => !product.isSoldOut && (product?.Id?.toString()?.includes(search) || product.Model?.toString()?.toLowerCase()?.includes(search.toLocaleLowerCase()))).slice(0, 50).map(product => <ProductCard key={product.Id} product={product}></ProductCard>)
                }
            </div>
            {/* <div className="flex flex-col">
                <input onChange={(event) => setSearchTerm(event.target.value)} name='searchTerm' type="text" placeholder="Type here" className="input input-bordered  input-primary max-w-sm" />
                {
                    (products?.filter(d => (searchTerm && d.Id.includes(searchTerm)) || (searchTerm && d.Model.toLowerCase().includes(searchTerm.toLowerCase()))
                    ).slice(0, 20))?.map(product => <ProductCard key={product.Id} product={product}></ProductCard>)
                }

            </div> */}

        </div>
    );
};

export default Shop;