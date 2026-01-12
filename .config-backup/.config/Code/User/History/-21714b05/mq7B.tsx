import AuthProvider from '@/contexts/AuthContext';
import { Stack } from 'expo-router';

import "/glo"

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </AuthProvider>
  );
}