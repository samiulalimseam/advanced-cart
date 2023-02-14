import React, { useContext, useEffect, useRef, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import {products} from '../../src/products'
import { Oval } from 'react-loader-spinner';
import ReactPrint from 'react-to-print';
import axios from 'axios';

const Cart = () => {
    const { cartArray, setCartArray } = useContext(ShopContext);
    const [products,setProducts] = useState();
    const [loading, setLoading] = useState(false);
    const ref = useRef();
    // useEffect(()=>{
    //     setLoading(true);
    //     fetch('https://advanced-cart-server-fixed.vercel.app/products')
    //     .then(res=> res.json())
    //     .then(data=>{
    //         setProducts(data)
    //         setLoading(false)
    //     })
    //     .catch(err=> console.error(err))
    // },[])


    const clearCart = () =>{
        setCartArray([])
    }

    const sodldOut = () => {
        const productsToSold = [];
        cartArray.map(product=> productsToSold.push(product.Id) )
        axios.post('https://advanced-cart-server-fixed.vercel.app/updatemany', {
            method: "POST",
            headers: {
                "conent-type": "application/json"
            },
            body: productsToSold
        })
        
        .then(data=> console.log(data))
    }
    if(loading){
        return (
            <div>
                <Oval></Oval>
            </div>
        )
    }
    return (
        <div>
            <h3>Total {cartArray.length} items added</h3>
           <div className="product-list w-[50%] shadow-lg rounded-lg my-5 mx-auto">
           <table ref={ref} className='w-full'>
                <tr className='flex justify-between w-full px-5'>
                    <th> <input type="checkbox" /> </th>
                    <th>SL</th>
                    <th>Model</th>
                    <th>Price</th>
                    <th>Location</th>
                    <th>Action</th>
                </tr>
                {
                    cartArray.map(product=> {
                        return <div>
                            <tr className='flex justify-between w-full px-5'>
                                <td><input type="checkbox" name="" id="" /></td>
                                <td>{product.Id} </td>
                                <td>{product.Model} </td>
                                <td>{product.MRP} </td>
                                <td>{product.Location} </td>
                                <td><button className='p-1 m-2 bg-red-400 rounded-md text-white'>Remove</button></td>
                            </tr>
                        </div>
                    })
                }
            </table>
            <div className="action">
                <ReactPrint content={()=> ref.current} trigger={ ()=> <button className='bg-green-400 p-2 m-2 rounded'>Make Invoice</button>}/>
                
                <button onClick={sodldOut} className='bg-yellow-400 p-2 m-2 rounded'>Sold Out</button>
                <button className='bg-orange-400 p-2 m-2 rounded'>Move to Hazaribagh</button>
                <button className='bg-orange-400 p-2 m-2 rounded'>Move to Malibagh</button>
                <button onClick={clearCart} className='bg-red-600 text-white p-2 m-2 rounded'>Clear Cart</button>
            </div>
           </div>
        </div>
    );
};

export default Cart;