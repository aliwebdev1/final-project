import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();


const UserContext = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    const updateUserName = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }

    const logOut = () => {

        signOut(auth).then(() => {

        }).catch((error) => {

        });
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
            // console.log('User Observing Running', currentUser);

        })
        return () => unsubscribe()
    }, [])


    const userInfo = {
        createUser,
        userSignIn,
        updateUserName,
        googleLogin,
        user,
        logOut,
        loading
    }

    return (
        <AuthContext.Provider value={userInfo} >
            {children}
        </AuthContext.Provider >
    );
};

export default UserContext;