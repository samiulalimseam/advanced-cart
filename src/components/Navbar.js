import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar bg-slate-200'>
            <div className="links flex justify-center mx-auto my-5">
                <Link className='p-2   text-sm'  to={`/`}>STORE</Link>
                <Link className='p-2   text-sm' to={`/cart`}>CART</Link>
                <Link className='p-2   text-sm' to={`/add-product`}>Add Product</Link>
            </div>
        </div>
    );
};

export default Navbar;