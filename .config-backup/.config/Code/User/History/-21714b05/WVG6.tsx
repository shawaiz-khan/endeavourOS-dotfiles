import { Stack } from 'expo-router';
import "./global.css";
import * as SplashScreen from "expo-splash-screen"

SplashScreen.setOptions({
  
})

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}