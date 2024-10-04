import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [authToken, setAuthToken] = useState('');
    const [userConnected, setUserConnected] = useState('');

    const isAuthenticated = !!authToken;

    return (
        <AuthContext.Provider value={{ authToken, userConnected, isAuthenticated, setAuthToken, setUserConnected}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
