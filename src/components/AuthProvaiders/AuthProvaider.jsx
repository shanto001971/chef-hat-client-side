import React, { createContext, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../../firebase/Firebase.config';


export const AuthContex = createContext(null);
const auth = getAuth(app);
const AuthProvaider = ({children}) => {
    const [user,setUser]=useState({})

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOutUser=()=>{
        return signOut(auth)
    }

    const googleAuth = new GoogleAuthProvider()
    const googleSingIn =()=>{
       return signInWithPopup(auth,googleAuth)
    }


    const authinfo ={
        createUser,
        loginUser,
        logOutUser,
        user,
        setUser,
        googleSingIn,

    }
    return (
       <AuthContex.Provider value={authinfo} >
        {children}
       </AuthContex.Provider>
    );
};

export default AuthProvaider;