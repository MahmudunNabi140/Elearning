import React, { useContext } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../../context/AuthContext'; // Import AuthContext
import Colors from '../../../constent/Colors';
import { Ionicons } from '@expo/vector-icons';
export default function Header() {
  const auth = useContext(AuthContext);

  if (!auth) return null; // Ensure context is available

  return (
    <>
      <View style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10,
      alignItems: 'center',
       }}>
        <View>
          <Text style={{ fontFamily: 'outfit-bold', fontSize: 25 }}>Welcome {auth.user ? auth.user.name : 'Guest'}</Text>
          <Text style={{ fontFamily: 'outfit', fontSize: 17 }}>Let's Get Started</Text>
        </View>
        <TouchableOpacity>
          <Ionicons><Ionicons name="settings-outline" size={32} color="black" /></Ionicons>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => auth.logout()}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View> */}
    </>
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
