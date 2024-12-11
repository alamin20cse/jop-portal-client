import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.init';
   export const AuthContex=createContext(null)


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setloading]=useState(true);

    const creatUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    






    useEffect(()=>{
      const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setloading(false);
            console.log(currentUser);


        })
        return ()=>{
            unsubscribe();
        }

    },[])




    const authInfo={
        user,
        loading,
        creatUser,

        

    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}

       </AuthContex.Provider>
    );
};

export default AuthProvider;