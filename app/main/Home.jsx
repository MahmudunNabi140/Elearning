import { View, Text, TouchableOpacity,StyleSheet,Alert } from 'react-native'
import React from 'react'
import Colors from "../../constent/Colors";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
export default function Home() {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    Alert.alert('Logged out', 'You have been logged out.');
    router.push('../auth/SignIn'); // Redirect to login
};
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text >Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 10
  }
})