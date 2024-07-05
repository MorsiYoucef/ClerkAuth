import { Colors } from '@/constants/Colors'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native'
import { Image } from 'react-native'
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
      <Image source={require('./../assets/images/group-1.png')} />
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 80,
        }}
      >
        <Text
          style={{
            fontSize: 21,
            textAlign: 'center',
            fontFamily: 'Outfit-Bold',
          }}
        >
          Gets things done with TODO APP
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: '#8b8b8b',
            marginTop: 10,
            lineHeight: 20,
            width: '90%',
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Eu eget felis turpis nisl
          risus quis. Arcu morbi maecenas egestas eget. Arcu sed eget vitae
          aliquet. Mauris diam et id sed neque.
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
      <Image
        source={require('./../assets/images/loginscreenbottom.png')}
        style={{ marginTop: 40 }}
      />
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
    backgroundColor: '#57CEBF',
    width: '90%',
    padding: 20,
    borderRadius: 99,
    marginTop: 80,
  },
})
