import React, { useState } from 'react';
import axiosInstance from '../../services/api';
import { useAuth } from '../../contexts/AuthContext'; 
import { useNavigate } from "react-router-dom";
import teamMeeting7 from '../../assets/img-home/team-meeting-7.webp';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { setAuthToken, setUserConnected  } = useAuth(); 
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/auth',
                {
                    email,
                    password,
                },
                {
                    withCredentials: true,
                }
            );
            const token = response.data.token;
            const user = response.data.user;
            setAuthToken(token);
            setUserConnected(user);
            navigate("/to-do-list");
        } catch (error) {
            setError('Le couple mot de passe et mail ne correspondent pas');
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
                                    Connecte toi pour pouvoir débuter ou continuer ta gestion de projet grâce à Every Meeting
                                </h1>
                            </div>
                        </div>
                        <form onSubmit={handleLogin} className="space-y-4 w-3/4">
                            <div>
                                <label className="block text-xl text-gray-600 my-2">Email</label>
                                <input
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-3 py-2 text-gray-600 border border-gray-600 border-4 rounded-lg shadow-xl focus:outline-none focus:border-nav"
                                    required
                                    name="email"
                                />
                            </div>
                            <div>
                                <label className="block text-xl text-gray-600 my-2">Mot de passe</label>
                                <input
                                    type="plainPassword"
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-3 py-2 text-gray-600 border border-gray-600 border-4 rounded-lg shadow-xl focus:outline-none focus:border-nav"
                                    required
                                    name="plainPassword"
                                />
                            </div>
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="text-2xl text-white bg-nav hover:bg-blue-200 hover:text-nav px-4 py-3 rounded-full mt-6"
                                >
                                    Connexion
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
