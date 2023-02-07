import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

const ProductCard = ({ product }) => {
    const { cartArray, setCartArray } = useContext(ShopContext);

    const handleAddProduct = () => {

        if (cartArray.find(item => item.Id === product.Id)) {
            alert('Already Exists')
        }
        else {
            
            setCartArray(cartArray => [...cartArray, product])
            console.log(cartArray)
        }

    }
    return (
        <div className='shadow-lg rounded-lg w-96 my-5 mx-auto'>

            <div className="flex justify-between p-3">
                <div className="details text-left">
                    <p className='text-xs'>{product.Id}</p>
                    <p className=''>Model: {product.Model}</p>
                    <p className=''>Size: {product.Size}</p>
                    <p className=''>Price: {product.MRP}</p>
                    <p className=''>Location: {product.Location}</p>
                </div>
                <div className=" flex flex-col">
                    <button onClick={handleAddProduct} className='p-2 bg-red-500 rounded text-white m-1'>Add to list</button>
                    <button className='p-2 bg-blue-600 rounded text-white m-1'>Modify</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;