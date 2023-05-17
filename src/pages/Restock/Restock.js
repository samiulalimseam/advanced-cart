import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { Oval } from 'react-loader-spinner';
import { toast } from 'react-toastify';

const Restock = () => {
    const { restockProduct, setRestockProduct } = useContext(ShopContext);
    const [products, setProducts] = useState([]);
    const [newLocation, setNewlocation] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    let count = 0;
    let soldOutProducts = [];
    const getData = (val) => {
        setSearch(val.target.value)
    }
    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://advanced-cart-server-fixed-samiulalimseam.vercel.app/products`)
            .then(data => {
                setProducts(data.data)
                setLoading(false)
            })

    }, [])
    soldOutProducts = products.filter(product => product.isSoldOut === true);

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`https://advanced-cart-server-fixed-samiulalimseam.vercel.app/api/restock`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ Id: restockProduct, Location: newLocation })
        })
            .then(data => data.json())
            .then(d => {
                toast(d.modifiedCount+ 'Product Updated')
                
            })

    }

    const handleOnclick = (id, model, size, price) => {
        setRestockProduct(id)

    }

    if (loading) {
        return <div className='w-full m-auto '>
            <div className='m-auto spinner w-12'>

            <Oval className=''></Oval>
            </div>
        </div>
    }
    return (
        <div>
            <h3>Search for info of a Model </h3>
            <p>
                <input onChange={getData} className='border rounded w-96 h-12' type="text" />
                <div className="products   w-full m-3 ">
                    {/* MOdel wise product count */}
                    <div className="overflow-x-auto">
                        <table className="table table-compact w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Id</th>
                                    <th>Model</th>
                                    <th>Size</th>
                                    <th>location</th>
                                    <th>Last Login</th>
                                    <th>Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    soldOutProducts.filter(product => product.Id.toString().includes(search)).map(p => {
                                        count += 1;
                                        return <tr>
                                            <th>{count}</th>
                                            <td>{p.Id}</td>
                                            <td>{p.Model}</td>
                                            <td>{p.Size}</td>
                                            <td>Color</td>
                                            <td>{p.MRP}</td>
                                            <td> <label onClick={() => handleOnclick(p.Id, p.Model, p.Size, p.MRP)} htmlFor="my-modal-3" className="btn btn-sm btn-warning">Restock</label> </td>

                                        </tr>





                                    })
                                }
                            </tbody>


                        </table>
                    </div>



                </div>


            </p >
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <form onSubmit={handleSubmit} className='flex flex-col' >

                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Restock {restockProduct}</h3>
                        <p className="py-4 m-1">New Location :</p>
                        <input required onChange={(e) => setNewlocation(e.target.value)} name='location' type="text" className='m-1 rounded' />
                        <button className='btn btn-warning m-1' type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Restock;