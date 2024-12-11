import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
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

    const signin=(email,password)=>
    {
        setloading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    
    const googleProvider=new GoogleAuthProvider()
    const handelGooglSign=()=>{
      return  signInWithPopup(auth,googleProvider)
       
    }
    

    const usersignOut=()=>{
        setloading(true);
        return signOut(auth);
    }






    useEffect(()=>{
      const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setloading(false);
            // console.log(currentUser);


        })
        return ()=>{
            unsubscribe();
        }

    },[])




    const authInfo={
        user,
        loading,
        creatUser,
        signin,
        usersignOut,
        handelGooglSign,

        

    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}

       </AuthContex.Provider>
    );
};

export default AuthProvider;