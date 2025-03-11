import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';
import Colors from "../../constent/Colors";
import { router } from 'expo-router';
import { registerUser } from '../api';
export default function SignUp() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (key, value) => {
        setForm({ ...form, [key]: value });
    };

    const handleSignUp = async () => {
        if (!form.name || !form.email || !form.password || !form.password_confirmation) {
            Alert.alert('Error', 'All fields are required');
            return;
        }

        setLoading(true);
        try {
            const data = await registerUser(form.name, form.email, form.password, form.password_confirmation);
            Alert.alert('Success', data.message);
            router.push('auth/SignIn'); // Navigate to Sign In page after registratio
        } catch (error) {
            Alert.alert('Error', error.response?.data?.message || 'Something went wrong');
        }
        setLoading(false);
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/logo.png')} style={styles.logo} />

            <Text style={styles.title}>Create A New Account</Text>

            <TextInput
                style={styles.textinput}
                placeholder='Full Name'
                value={form.name}
                onChangeText={(text) => handleChange('name', text)}
            />
            <TextInput
                style={styles.textinput}
                placeholder='Email'
                keyboardType='email-address'
                value={form.email}
                onChangeText={(text) => handleChange('email', text)}
            />
            <TextInput
                style={styles.textinput}
                placeholder='Password'
                secureTextEntry={true}
                value={form.password}
                onChangeText={(text) => handleChange('password', text)}
            />
            <TextInput
                style={styles.textinput}
                placeholder='Confirm Password'
                secureTextEntry={true}
                value={form.password_confirmation}
                onChangeText={(text) => handleChange('password_confirmation', text)}
            />

            <TouchableOpacity style={styles.button} onPress={handleSignUp} disabled={loading}>
                <Text style={styles.buttonText}>
                    {loading ? 'Creating Account...' : 'Create Account'}
                </Text>
            </TouchableOpacity>

            <View style={styles.footer}>
                <Text style={{ fontFamily: 'outfit' }}>Already have an account?</Text>
                <Pressable onPress={() => router.push('auth/SignIn')}>
                    <Text style={{ color: Colors.primary, fontFamily: 'outfit-bold' }}> Sign In Here</Text>
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
