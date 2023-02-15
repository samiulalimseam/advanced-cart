import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useState , useEffect} from 'react';
import app from '../firebase/firebase.config';

export const ShopContext = createContext({});
const auth = getAuth(app);
const ShopContextProvider = ({ children }) => {
    const [cartArray, setCartArray] = useState([]);
    const [userData, setUserData] = useState([]);
    const [user, setUser] = useState({});
   




    const googleLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const logOut = ()=>{
        return signOut((auth))
    }
    
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
             setUser(currentUser);
            
         })
         return ()=>{
             unsubscribe();
         }
     },[])
    






    const contextData = {googleLogin,user,logOut,cartArray, setCartArray, userData, setUserData }

    return (
        <div>
            <ShopContext.Provider value={contextData}>
                {children}
            </ShopContext.Provider>
        </div>
    );
};

export default ShopContextProvider;