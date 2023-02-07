import React, { createContext, useState } from 'react';

export const ShopContext = createContext({});

const ShopContextProvider = ({children}) => {
    const [cartArray, setCartArray] = useState([]);    






 const shopData = {cartArray,setCartArray}

    return (
        <div>
            <ShopContext.Provider value={shopData}>
                {children}
            </ShopContext.Provider>
        </div>
    );
};

export default ShopContextProvider;