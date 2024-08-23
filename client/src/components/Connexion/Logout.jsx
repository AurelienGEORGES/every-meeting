import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from "react-router-dom";
import teamMeeting7 from '../../assets/img-home/team-meeting-7.webp';

const Logout = () => {
    const { logout, user } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className='w-full'>
            <div className='flex items-center justify-center min-h-screen flex-col'>
                <div>
                    <h1 className='text-2xl md:text-4xl text-nav text-center mx-3 my-10'>
                        Aurevoir {user.username}.<br />Tu peux te déconnecter depuis ce bouton.
                    </h1>
                </div>
                <div className="my-5">
                    <button onClick={handleLogout} className='text-2xl text-white bg-nav hover:bg-blue-200 hover:text-nav px-4 py-2 rounded-full'>
                        Déconnexion
                    </button>
                </div>
                <div className="my-5 flex justify-center">
                    <img src={teamMeeting7} alt='reflexion en groupe' className='w-11/12 img-fluid rounded-xl' />
                </div>
            </div>
        </div>
    );
};

export default Logout;