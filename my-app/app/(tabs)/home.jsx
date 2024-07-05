import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const home = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
    />
  )
}
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>
}

export default home

const styles = StyleSheet.create({})
