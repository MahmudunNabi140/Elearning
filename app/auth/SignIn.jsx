import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Pressable, Alert,Touchable } from 'react-native';
import Colors from "../../constent/Colors";
import { router } from 'expo-router';
import React, { useState } from 'react';
import { loginUser } from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
        const data = await loginUser(email, password);
        Alert.alert('Success', data.message);
        await AsyncStorage.setItem('token', data.token); // Save token for later use
        console.log('User Token:', data.token);
        // Navigate to the main app screen
        router.push('../main/Home');
    } catch (error) {
        Alert.alert('Error', error.message || 'Login failed');
    }
    setLoading(false);
};
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome Back</Text>

      <TextInput
        style={styles.textinput}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
      />

      <TextInput
        style={styles.textinput}
        placeholder='Password'
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Signing In...' : 'Sign In'}</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={{ fontFamily: 'outfit' }}>Don't have an account?</Text>
        <Pressable onPress={() => router.push('auth/SignUp')}>
          <Text style={{ color: Colors.primary, fontFamily: 'outfit-bold' }}> Create New Here</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 100,
    flex: 1,
    backgroundColor: Colors.white,
    padding: 25
  },
  logo: {
    width: 180,
    height: 180
  },
  title: {
    fontSize: 30,
    fontFamily: 'outfit-bold',
  },
  textinput: {
    width: '100%',
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 20,
    paddingLeft: 10,
    fontSize: 18
  },
  button: {
    width: '100%',
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: Colors.white,
    fontSize: 20,
    fontFamily: 'outfit',
    textAlign: 'center',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  }
});
