import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from "./../../constent/Colors";
export default function SignUp() {
    return (
        <View style={{
            display: 'flex ',
            alignItems: 'center',
            marginTop: 50,
            flex: 1,
            backgroundColor:'Colors.white'
        }}
        >
            <Image source={require('../../assets/images/logo.png')} style={{ width: 180, height: 180 }}></Image>

            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 20
            }}>Create A New Account</Text>
        </View>
    )
}