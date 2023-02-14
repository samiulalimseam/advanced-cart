import React, { createContext, useState } from 'react';

export const ShopContext = createContext({});

const ShopContextProvider = ({children}) => {
    const [cartArray, setCartArray] = useState([]);    
    const [userData, setUserData] = useState([]);    






 const contextData = {cartArray,setCartArray,userData,setUserData}

    return (
        <div>
            <ShopContext.Provider value={contextData}>
                {children}
            </ShopContext.Provider>
        </div>
    );
};

export default ShopContextProvider;