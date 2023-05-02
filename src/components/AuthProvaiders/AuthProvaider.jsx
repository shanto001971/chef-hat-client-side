import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../../firebase/Firebase.config';


export const AuthContex = createContext(null);
const auth = getAuth(app);
const AuthProvaider = ({children}) => {

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOutUser=()=>{
        return signOut(auth)
    }

    const user ={}

    const authinfo ={
        createUser,
        loginUser,
        logOutUser,
        user

    }
    return (
       <AuthContex.Provider value={authinfo} >
        {children}
       </AuthContex.Provider>
    );
};

export default AuthProvaider;