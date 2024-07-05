import { useRouter } from 'expo-router'
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Page = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the App!</Text>
      <Button title="Go to Home" onPress={() => router.push('/home')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
})

export default Page
