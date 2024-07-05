import 'react-native-url-polyfill/auto'
import { Slot } from 'expo-router'
import {
  ClerkProvider,
  ClerkLoaded,
  SignedOut,
  SignedIn,
} from '@clerk/clerk-expo'
import LoginScreen from './(auth)/LoginScreen'

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env'
  )
}

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <SignedIn>
        <Slot />
      </SignedIn>
      <SignedOut>
        <LoginScreen />
      </SignedOut>
    </ClerkProvider>
  )
}
