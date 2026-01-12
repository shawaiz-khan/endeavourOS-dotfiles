import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
    return (
        <SafeAreaView className='flex-1'>
            <View className='p-5 bg-green-200 flex-1'>
                <View className='flex justify-center items-center w-full bg-red-200'>
                    <Text className='text-5xl font-bold text-center'>Welcome to After Me</Text>
                    <Text>Your private offline diary</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Index;