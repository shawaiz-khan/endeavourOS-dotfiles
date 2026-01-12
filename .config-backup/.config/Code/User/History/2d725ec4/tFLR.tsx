import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
    return (
        <SafeAreaView className='flex-1'>
            <View className='p-5 bg-neutral-50 flex-1 justify-center items-center'>
                <View className='w-full'>
                    <Text className='text-md uppercase font-medium text-center tracking-tight'>Welcome to</Text>
                    <Text className='text-5xl uppercase font-black text-center tracking-tight'>After Me</Text>
                    <Text className='text-xl font-medium text-center tracking-tight'>Your private offline diary</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Index;