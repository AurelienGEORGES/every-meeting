import { useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import useRefreshToken from '../hooks/useRefreshToken';

const API_URL =
  import.meta.env.MODE === 'production'
    ? import.meta.env.VITE_API_URL_PROD
    : import.meta.env.VITE_API_URL_DEV;

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

const useAxiosInterceptor = () => {
  const { authToken, logout } = useAuth();

  const refreshToken = useRefreshToken();

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            await refreshToken();
            return axiosInstance(originalRequest);
          } catch (refreshError) {
            logout();
            window.location.href = '/login';
            return Promise.reject(refreshError);
          }
        }
        return Promise.reject(error);
      },
    );
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [authToken, logout, refreshToken]);
};

export default axiosInstance;
export { useAxiosInterceptor };
