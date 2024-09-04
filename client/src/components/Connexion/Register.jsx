import React, { useState } from 'react';
import axiosInstance from '../../services/api';
import teamMeeting7 from '../../assets/img-home/team-meeting-7.webp';
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [plainPassword, setPlainPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,}$/;
    const alphanumericRegex = /^[a-zA-Z0-9À-ÖØ-öø-ÿ]+$/;

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (email !== confirmEmail) {
            setError('Les adresses email ne correspondent pas');
            return;
        }

        if (plainPassword !== confirmPassword) {
            setError('Les mots de passe ne correspondent pas');
            return;
        }

        const isValidUsername = alphanumericRegex.test(username);

        if (!isValidUsername) {
            setError("Le nom d'utilisateur ne doit contenir que des chiffres et des lettres");
            return;
        }

        const isValidEmail = emailRegex.test(email);

        if (!isValidEmail) {
            setError("L'adresse mail n'est pas valide");
            return;
        }

        const isValidPassword = passwordRegex.test(plainPassword);

        if (!isValidPassword) {
            setError("Le mot de passe doit contenir 8 caractères minimum dont une majuscule, un chiffre et un caractère spécial minimum");
            return;
        }
        try {
            const response = await axiosInstance.post(
                'http://localhost:8000/api/users',
                {
                    email,
                    username,
                    plainPassword
                },
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            );
            navigate("/login");
        } catch (error) {
            setError('Erreur lors de la création de l\'utilisateur');
        }
    };

    return (
        <div className='w-full'>
            <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
                <div className="md:w-1/2 flex justify-center md:order-1 order-2 my-5">
                    <img src={teamMeeting7} alt='reflexion en groupe' className='w-11/12 img-fluid rounded-xl' />
                </div>
                <div className='md:w-1/2 w-full order-1 md:order-2'>
                    <div className="flex justify-center items-center flex-col">
                        <div>
                            <div className='flex justify-center'>
                                <h1 className='text-center w-3/4 text-md md:text-2xl text-nav mx-1 my-5'>
                                    Tu peux t'inscrire pour avoir accès aux nombreuses possibilités qu'offre Every Meeting
                                </h1>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4 w-3/4">
                            <div>
                                <label className="block text-gray-600">Nom d'utilisateur
                                    <span className="block text-sm text-gray-700">
                                        (seulement des chiffres et des lettres)
                                    </span></label>
                                <input
                                    type="text"
                                    name="username"
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full px-3 py-2 text-gray-600 border border-gray-600 border-4 rounded-lg shadow-xl focus:outline-none focus:border-nav"
                                    required
                                    autoComplete="new-username"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-3 py-2 text-gray-600 border border-gray-600 border-4 rounded-lg shadow-xl focus:outline-none focus:border-nav"
                                    required
                                    autoComplete="new-email"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600">Confirmer l'email</label>
                                <input
                                    type="email"
                                    name="confirmEmail"
                                    onChange={(e) => setConfirmEmail(e.target.value)}
                                    className="w-full px-3 py-2 text-gray-600 border border-gray-600 border-4 rounded-lg shadow-xl focus:outline-none focus:border-nav"
                                    required
                                    autoComplete="new-email"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600">
                                    Mot de passe
                                    <span className="block text-sm text-gray-700">
                                        (8 caractères minimum dont une majuscule, un chiffre et un caractère spécial minimum)
                                    </span>
                                </label>
                                <input
                                    type="password"
                                    name="plainPassword"
                                    onChange={(e) => setPlainPassword(e.target.value)}
                                    className="w-full px-3 py-2 text-gray-600 border border-gray-600 border-4 rounded-lg shadow-xl focus:outline-none focus:border-nav"
                                    required
                                    autoComplete="new-password"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600">Confirmer le mot de passe</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full px-3 py-2 text-gray-600 border border-gray-600 border-4 rounded-lg shadow-xl focus:outline-none focus:border-nav"
                                    required
                                    autoComplete="new-password"
                                />
                            </div>
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="text-2xl text-white bg-nav hover:bg-blue-200 hover:text-nav px-4 py-3 rounded-full mt-6"
                                >
                                    S'inscrire
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register