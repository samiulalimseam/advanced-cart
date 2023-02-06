import React from 'react';
import {products} from "../../src/products"
import ProductCard from '../components/productCard/ProductCard';

const Shop = () => {
    console.log(products)
    return (
        <div className='shop'>
            Products
            <div className="products">
                {
                    products.map( product=>{
                        return <ProductCard key={product.Id} product={product}></ProductCard>
                    })
                }
            </div>

        </div>
    );
};

export default Shop;