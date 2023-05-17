import React from 'react';

const ProductVisualization = ({ products }) => {
    // Create an object to store the count of sizes for each model
    const modelSizeCount = {};

    // Calculate the count of sizes for each model
    products.forEach((product) => {
        const { Model, Size } = product;
        if (!modelSizeCount[Model]) {
            modelSizeCount[Model] = {};
        }
        if (!modelSizeCount[Model][Size]) {
            modelSizeCount[Model][Size] = 0;
        }
        modelSizeCount[Model][Size]++;
    });

    return (
        <div className=''>
            <h2>Product Model-wise Size Count</h2>
            {Object.keys(modelSizeCount).map((model) => (
                <div className=' shadow-lg rounded-md m-auto p-2 w-96 my-2' key={model}>


                    
                    <h3 className='w-full bg-black rounded-md font-bold text-lg text-white'>Model: {model}</h3>
                    
                    <ul className='flex justify-center'>
                        {Object.keys(modelSizeCount[model]).map((size) => (
                            <li className='m-2' key={size}>
                                <span className=' text-purple-600'>Size</span> <span className='font-bold'>{size}</span>: {modelSizeCount[model][size]} Pcs
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ProductVisualization;
