import { AuthContext } from '@/contexts/AuthContext';
import { Stack } from 'expo-router';
import "./global.css";

export default function RootLayout() {
  return (
    <AuthContext>
      <Stack screenOptions={{ headerShown: false }} />
    </AuthContext>
  );
}