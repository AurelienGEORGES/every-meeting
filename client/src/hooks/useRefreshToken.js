import { useAuth } from '../contexts/AuthContext';
import axiosInstance from '../services/api';

const useRefreshToken = () => {

    const { setUserConnected, setAuthToken } = useAuth();
    const refresh = async () => {
        const response = await axiosInstance.post('/token/refresh', {}, {
            withCredentials: true,
        });
        const JWTtoken = response.data.token
        setAuthToken(response.data.token);
        setUserConnected(response.data.user);
        return JWTtoken
    }
    return refresh;
};

export default useRefreshToken;