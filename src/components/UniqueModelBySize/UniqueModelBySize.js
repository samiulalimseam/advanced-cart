import React, { useState, useEffect } from 'react';

function UniqueModelsBySize() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the JSON data from the server
    fetch('https://advanced-cart-server-fixed.vercel.app/products')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  // Create a dictionary to store unique models for each size
  const uniqueModelsBySize = {};

  data.forEach(product => {
    const size = product.Size;
    const model = product.Model;

    // Add the model to the set for this size
    if (!uniqueModelsBySize[size]) {
      uniqueModelsBySize[size] = new Set();
    }
    uniqueModelsBySize[size].add(model);
  });

  // Render the unique models for each size
  return (
    <div>
      {Object.entries(uniqueModelsBySize).map(([size, models]) => (
        <div key={size}>
          <h2>Size {size}</h2>
          <ul>
            {Array.from(models).map(model => (
              <li key={model}>{model}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default UniqueModelsBySize;
