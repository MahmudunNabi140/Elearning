import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import Colors from "../../constent/Colors";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = await AsyncStorage.getItem('token');
      // console.log(token);
      if (!token) {
        router.push('../auth/SignIn'); // Redirect if no token
      } else {
        setIsAuthenticated(true); // User is authenticated
      }
    };

    checkAuthStatus();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    Alert.alert('Logged out', 'You have been logged out.');
    router.push('../auth/SignIn'); // Redirect to login
  };

  if (!isAuthenticated) {
    return null; // Prevent rendering if user is not authenticated
  }

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  }
});
