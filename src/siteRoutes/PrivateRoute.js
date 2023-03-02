import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const PrivateRoute = ({children}) => {
    const {userData} = useContext(ShopContext);

    if(userData.isSuperAdmin){

        return children
    }
    
    
        return (
            <div>
            <h1 className='m-2'>
                Unauthorized access please  
            </h1>  
            <Link to={`/login`} className=' bg-blue-500 p-2 rounded-md text-white m-5'>Login</Link>
        </div>
    )
}


export default PrivateRoute;