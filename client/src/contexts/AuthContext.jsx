import React, { createContext, useState, useContext } from 'react';


// Créer le contexte
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [user, setUser] = useState(null);

  const login = (token, user) => {
    setAuthToken(token);
    setUser(user);
    console.log('vous êtes connecté')
  };

  const logout = () => {
    setAuthToken(null);
    setUser(null);
    console.log('vous êtes déconnecté')
  };

  const isAuthenticated = !!authToken;

  return (
    <AuthContext.Provider value={{ authToken, login, logout, user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
