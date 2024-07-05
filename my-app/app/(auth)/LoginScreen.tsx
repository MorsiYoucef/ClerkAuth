import { Colors } from '@/constants/Colors'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native'
import { Image } from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import { useOAuth } from '@clerk/clerk-expo'
// import * as Linking from 'expo-linking'
import React from 'react'
import { useRouter } from 'expo-router'

const LoginScreen = () => {
  const router = useRouter()
  const onPress = () => {
    try {
      router.push('/(auth)/sign-in')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View>
      <View>
        <Image source={require('./../../assets/images/group-1.png')} />
      </View>
      <View style={styles.subContainer2}>
        <Text style={styles.text2}>
          Your Ultimate{' '}
          <Text style={styles.text1}>Community Business Directory</Text>
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: '#ddd',
            marginTop: 10,
          }}
        >
          Find your favorite business near you and post your own business to
          your community
        </Text>
        <TouchableOpacity onPress={onPress} style={styles.btn}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontFamily: 'Outfit',
            }}
          >
            Let's Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  subContainer1: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 100,
  },
  subsubContainer: {},
  text2: {
    fontSize: 30,
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
    marginTop: 20,
  },
  text1: {
    color: '#ddd',
  },
  subContainer2: {
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 0,
  },
  image: {
    width: 220,
    height: 450,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#000',
  },
  btn: {
    backgroundColor: '#ddd',
    padding: 20,
    borderRadius: 99,
    marginTop: 20,
  },
})