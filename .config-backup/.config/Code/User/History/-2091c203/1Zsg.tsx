import { StatusBar } from 'expo-status-bar';

import './global.css';
import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <SafeAreaView className='bg-red-200 flex-1'>
        <ScrollView className='p-10 bg-green-200'>
          <Text className='text-3xl font-bold'>Hello world</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}