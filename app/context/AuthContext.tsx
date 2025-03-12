import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
// Define the user interface
interface User {
  id: number;
  name: string;
  email: string;
}

// Define the AuthContext shape
interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (userData: User, token: string) => Promise<void>;
  logout: () => Promise<void>;
}

// Create the context with default values
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider Component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // Load user and token from AsyncStorage on app start
  useEffect(() => {
    const loadAuthData = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        const storedToken = await AsyncStorage.getItem('token');
        if (storedUser && storedToken) {
          setUser(JSON.parse(storedUser));
          setToken(storedToken);
        }
      } catch (error) {
        console.error('Error loading auth data:', error);
      }
    };

    loadAuthData();
  }, []);

  // Login function
  const login = async (userData: User, token: string) => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      await AsyncStorage.setItem('token', token);
      setUser(userData);
      setToken(token);
    } catch (error) {
      console.error('Error saving auth data:', error);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      await AsyncStorage.removeItem('token');
      setUser(null);
      setToken(null);
       router.push('../auth/SignIn');
    } catch (error) {
      console.error('Error clearing auth data:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
