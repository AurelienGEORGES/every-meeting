import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import useRefreshToken from '../hooks/useRefreshToken';

const PersistLogin = () => {
    const [loading, setLoading] = useState(true);
    const { authToken } = useAuth();
    const refreshToken = useRefreshToken()

    useEffect(() => {
        const checkRefreshToken = async () => {
            try {
                await refreshToken()
            }
            catch {
                console.log('hello')
            } finally {
                setLoading(false)
            }
        }
        !authToken ? checkRefreshToken() : setLoading(false) 
    }, [])

    return (
    <>
    {loading ? <p>loading...</p> : <Outlet />}
    </>
  )
}

export default PersistLogin