import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {

    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        confirmEmail: '',
        plainPassword: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, confirmEmail, plainPassword, confirmPassword, username } = formData;
        if (email !== confirmEmail) {
            setError('Les adresses email ne correspondent pas');
            return;
        }
        if (plainPassword !== confirmPassword) {
            setError('Les mots de passe ne correspondent pas');
            return;
        }
        try {
            console.log('test')
            const response = await axios.post(
                'http://localhost:8000/api/users',
                {
                    email,
                    username,
                    plainPassword    
                },
                {
                    withCredentials: true,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            );
        } catch (error) {
            setError('Erreur lors de la création de l\'utilisateur');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Inscription</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Nom d'utilisateur</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Confirmer Email</label>
                        <input
                            type="email"
                            name="confirmEmail"
                            value={formData.confirmEmail}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Mot de passe</label>
                        <input
                            type="password"
                            name="plainPassword"
                            value={formData.plainPassword}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Confirmer Mot de passe</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    >
                        S'inscrire
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register