import React, { useState } from 'react';
import { useEffect } from 'react';


const ProductSearch = ({productData}) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableSizes, setAvailableSizes] = useState([]);

  useEffect(() => {
    // Extract unique sizes from productData
    const uniqueSizes = [...new Set(productData.map(product => product.Size))];
    setAvailableSizes(uniqueSizes);
  }, []);
  const handleSizeChange = (event) => {
    const size = event.target.value;
    setSelectedSize(size);


    // Filter products by the selected size
    const filtered = productData?.filter((product) => product.Size === parseInt(size));
    setFilteredProducts(filtered);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Product Search</h1>
      
      <div className="mb-4">
        <label htmlFor="size" className="block text-gray-600 mb-2">Select Size:</label>
        <select
          id="size"
          name="size"
          onChange={handleSizeChange}
          value={selectedSize}
          className="px-4 py-2 border rounded-md w-full"
        >
          <option value="">All Sizes</option>
          {availableSizes.map(size => (
            <option key={size} value={size}>Size {size}</option>
          ))}
        </select>
      </div>


      <p className="text-gray-800 mb-2">Total Products: {filteredProducts.length}</p>

      {filteredProducts.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Products for Size {selectedSize}:</h2>
          <ul>
            {filteredProducts.map((product) => (
              <li key={product._id} className="mb-2">
                {product.Model} - {product.Location}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
