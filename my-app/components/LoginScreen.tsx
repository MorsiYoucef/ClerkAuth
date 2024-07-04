import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useClerk } from '@clerk/clerk-react'

const LoginScreen = () => {
  const { openSignIn } = useClerk()

  const handleSignIn = () => {
    openSignIn()
  }
  return (
    <View>
      <Image source={require('./../assets/images/group-1.png')} />
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Gets things done with TODO APP
        </Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: 'center',
            width: '78%',
            marginTop: 15,
            lineHeight: 22,
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Eu eget felis turpis nisl
          risus quis. Arcu morbi maecenas egestas eget. Arcu sed eget vitae
          aliquet. Mauris diam et id sed neque.
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#57CEBF',
            borderRadius: 99,
            padding: 14,
            width: '90%',
            marginTop: 80,
          }}
        >
          <Text
            onPress={handleSignIn}
            style={{
              color: '#fff',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 20,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require('./../assets/images/bottom.png')}
        style={{ marginTop: 40 }}
      />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})
