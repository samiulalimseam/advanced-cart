import React, { createContext, useState } from 'react';

const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState()
    return (
        <div>
            <ShopContext.Provider>
                {props.children}
            </ShopContext.Provider>
        </div>
    );
};

export default ShopContextProvider;