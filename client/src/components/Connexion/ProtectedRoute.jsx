import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'; // Assurez-vous d'importer le bon contexte

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth(); // Récupère l'état d'authentification
    console.log(isAuthenticated)

    if (!isAuthenticated) {
        // Redirige vers la page de connexion si l'utilisateur n'est pas authentifié
        return <Navigate to="/login" />;
    }

    // Si authentifié, rend le composant enfant
    return children;
};

export default ProtectedRoute;