import { StatusBar } from 'expo-status-bar';

import './global.css';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <SafeAreaView>
        <Text className='text-4xl'>Hello world</Text>
      </SafeAreaView>
    </>
  );
}