import { View, Text, Image } from 'react-native'
import React from 'react'
import Button from '../Share/Button'
import { useRouter } from 'expo-router'
export default function NoCourse() {
    const router=useRouter()
    return (
        <View style={{
            marginTop: 20,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Image source={require('../../../assets/images/book.png')} style={{ width: 200, height: 200, }} />
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 20,
                textAlign: 'center',
            }}>
            You Don't Have Any Course Yet
            </Text>
            <Button text={'+ Create New Course'} onPress={() => {router.push('/addCourse') }}></Button>
            <Button text={'Explore Existing Coureses'} onPress={() => { /* Add your onPress logic here */ }} type='outline'></Button>
        </View>
       
    )
}