import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../../firebase/Firebase.config';
import { GithubAuthProvider } from "firebase/auth";


export const AuthContex = createContext(null);
const auth = getAuth(app);
const AuthProvaider = ({ children }) => {
    const [user, setUser] = useState({})

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOutUser = () => {
        return signOut(auth)
    }

    const googleAuth = new GoogleAuthProvider()
    const googleSingIn = () => {
        return signInWithPopup(auth, googleAuth)
    }

    const logOut = () => {
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, logedUser => {
            console.log('state Objerver', logedUser)
            setUser(logedUser);
        })

        return () => {
            unsubscribe();
        }
    }, [])


    const provider = new GithubAuthProvider();

    const githubLogin = () => {
        return signInWithPopup(auth, provider);
    }

    const profileUpgrade = (Name, photo) => {
       return updateProfile(auth.currentUser, {
            displayName: Name, photoURL: photo,
        })
    }


    const authinfo = {
        createUser,
        loginUser,
        logOutUser,
        user,
        setUser,
        googleSingIn,
        logOut,
        githubLogin,
        profileUpgrade

    }
    return (
        <AuthContex.Provider value={authinfo} >
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvaider;