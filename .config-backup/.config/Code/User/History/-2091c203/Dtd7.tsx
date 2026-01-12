import { StatusBar } from 'expo-status-bar';

import './global.css';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <main>
      <StatusBar style="auto" />

      <SafeAreaView>
        <Text className='text-3xl font-bold'>Hello world</Text>
      </SafeAreaView>
    </main>
  );
}