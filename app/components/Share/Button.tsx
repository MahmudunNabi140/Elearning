import { View, Text, Touchable, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import Colors from '@/constent/Colors'

export default function Button({ text, type = 'file', onPress, loading }: { text: string, type?: string, onPress: () => void, loading: boolean}) {
    return (
        <TouchableOpacity onPress={onPress} style={{
            padding: 10,
            width: '100%',
            backgroundColor: type == 'file' ? Colors.primary : Colors.white,
            borderRadius: 15,
            marginTop: 20,
            borderWidth: type == 'file' ? 0 : 1,
            borderColor: Colors.primary,
        }}
        disabled={loading}
        >
            {!loading?
                <Text style={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: type == 'file' ? Colors.white : Colors.primary,
    
                }}>
                    {text}
                </Text>:
                <ActivityIndicator size={'large'} color={type=='file' ? Colors.white : Colors.primary}/>
            }
        </TouchableOpacity>
    )
}