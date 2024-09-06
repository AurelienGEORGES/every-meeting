import axios from 'axios';
// Assurez-vous d'importer le bon contexte

let API_URL = ''; // Remplacez par l'URL de votre API

if (import.meta.env.DEV) {
    API_URL = 'http://localhost:8000/api'
} else {
    API_URL = window.location.origin + '/api'
}

// Crée une instance axios avec une configuration de base
const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true, // Assurez-vous que les cookies sont envoyés avec chaque requête
});

export default axiosInstance;