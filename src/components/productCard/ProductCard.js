import React, { useContext, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';

const ProductCard = ({ product, location }) => {
    const { cartArray, setCartArray } = useContext(ShopContext);
    const [btnStatus, setBtnStatus] = useState(false);
    const [btnColor, setBtnColor] = useState('red');
    const prodLocation =  location.find(element=> element.Id === parseInt(product.Id));


    
    const handleAddProduct = () => {

        


        if (cartArray.find(item => item.Id === product.Id)) {
            alert('Already Exists')
        }
        else {

            setCartArray(cartArray => [...cartArray, product])
            setBtnStatus(true)
            setBtnColor('gray')
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
                    <p className=''>Location:  { 
                           prodLocation?.Location  

                    }</p>
                    {product?.isSoldOut && <p>Sold Out</p>}
                </div>
                <div className=" flex flex-col">
                    <button onClick={handleAddProduct} className='btn btn-warning m-1' style={{ backgroundColor: `${cartArray.findIndex(item => item.Id === product.Id) >= 0 && 'gray'}`, cursor: `${cartArray.findIndex(item => item.Id === product.Id) >= 0 && 'not-allowed'}` }}
                        disabled={cartArray.findIndex(item => item.Id === product.Id) >= 0 && 'true'}>Add to list</button>
                    <button className='btn btn-info m-1'>Modify</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;