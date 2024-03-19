import React from 'react';
import { createContext } from 'react';


export const AuthContext = createContext();


const UserContext = ({ children }) => {

    const userInfo = {

    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;