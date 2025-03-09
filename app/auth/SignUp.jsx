import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import Colors from "../../constent/Colors";
import { Touchable } from 'react-native';
import { router } from 'expo-router';

export default function SignUp() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/logo.png')} style={styles.logo} />

            <Text style={styles.title}>Create A New Account</Text>

            {/* Full Name Input */}
            <TextInput style={styles.textinput} placeholder='Full Name' />

            {/* Email Input */}
            <TextInput style={styles.textinput} placeholder='Email' />

            {/* Email Password */}
            <TextInput style={styles.textinput} placeholder='Password' secureTextEntry={true} />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Create Account
                </Text>
            </TouchableOpacity>

            <View style={styles.footer}>
                <Text style={{ fontFamily:'outfit' }}>Already have an account?</Text>
                <Pressable onPress={() => router.push('auth/SignIn')}>
                    <Text style={{ color: Colors.primary,fontFamily:'outfit-bold' }}> Sign In Here</Text>
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
