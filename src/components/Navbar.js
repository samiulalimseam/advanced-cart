import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="links">
                <Link to={`/`}>Store</Link>
                <Link to={`/cart`}>Cart</Link>
            </div>
        </div>
    );
};

export default Navbar;