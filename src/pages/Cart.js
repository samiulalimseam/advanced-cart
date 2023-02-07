import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import {products} from '../../src/products'
import { Oval } from 'react-loader-spinner';

const Cart = () => {
    const { cartArray, setCartArray } = useContext(ShopContext);
    const [products,setProducts] = useState();
    const [loading, setLoading] = useState(false);
    // useEffect(()=>{
    //     setLoading(true);
    //     fetch('http://localhost:5000/products')
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
           <table className='w-full'>
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
                <button className='bg-green-400 p-2 m-2 rounded'>Make Invoice</button>
                <button className='bg-orange-400 p-2 m-2 rounded'>Move to Hazaribagh</button>
                <button className='bg-orange-400 p-2 m-2 rounded'>Move to Malibagh</button>
                <button onClick={clearCart} className='bg-red-600 text-white p-2 m-2 rounded'>Clear Cart</button>
            </div>
           </div>
        </div>
    );
};

export default Cart;