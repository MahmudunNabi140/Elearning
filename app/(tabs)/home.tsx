import { View, Text, Platform } from 'react-native'
import React from 'react'
import Header from '../components/Home/header'
import Colors from '@/constent/Colors'
import NoCourse from '../components/Home/NoCourse'


export default function Home() {
  return (
    <View style={{padding:20,
    paddingTop: Platform.OS == 'ios' ? 45 : 25,
    flex: 1,
    backgroundColor: Colors.white
    }}>
      <Header></Header>
      <NoCourse></NoCourse>
      
    </View>
  )
}