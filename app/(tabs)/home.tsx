import { View, Text, Platform } from 'react-native'
import React from 'react'
import Header from '../components/Home/header'

export default function Home() {
  return (
    <View style={{padding:20,paddingTop: Platform.OS == 'ios' ? 45 : 25}}>
      <Header></Header>
    </View>
  )
}