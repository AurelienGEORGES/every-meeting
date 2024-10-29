import axios from 'axios';
// Assurez-vous d'importer le bon contexte

const API_URL = import.meta.env.MODE === 'production' ? import.meta.env.VITE_API_URL_PROD : import.meta.env.VITE_API_URL_DEV

// Crée une instance axios avec une configuration de base
const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true, // Assurez-vous que les cookies sont envoyés avec chaque requête
});

export default axiosInstance;