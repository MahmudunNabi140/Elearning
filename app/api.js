import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const API_BASE_URL = 'http://localhost:8000/api'; // Change this to your Laravel API URL
// const API_BASE_URL ='https://elearningbackend.softdevbd.com/api';
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

// ✅ Interceptor Fix: Add error handling for token retrieval
api.interceptors.request.use(
    async (config) => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        } catch (error) {
            console.error('Error getting token:', error);
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;

// ✅ Centralized Error Handling
const handleApiError = (error) => {
    if (error.response) {
        return Promise.reject(error.response.data);
    } else if (error.request) {
        return Promise.reject({ message: 'No response from server. Check your internet connection.' });
    } else {
        return Promise.reject({ message: error.message || 'Something went wrong' });
    }
};

// ✅ Register Function (Improved Error Handling)
export const registerUser = async (name, email, password, password_confirmation) => {
    try {
        const response = await api.post('/register', {
            name,
            email,
            password,
            password_confirmation,
        });
        return response.data;
    } catch (error) {
        return handleApiError(error);
    }
};

// ✅ Login Function (Improved Error Handling & Token Storage)
export const loginUser = async (email, password) => {
    try {
        const response = await api.post('/login', { email, password });
        
        // Store token if login is successful
        if (response.data.token) {
            await AsyncStorage.setItem('token', response.data.token);
        }

        return response.data;
    } catch (error) {
        return handleApiError(error);
    }
};
