import { StatusBar } from 'expo-status-bar';

import './global.css';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <SafeAreaView className='px-10'>
        <Text className='text-3xl font-bold'>Hello world</Text>
      </SafeAreaView>
    </>
  );
}