import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
    return (
        <SafeAreaView className='flex-1'>
            <View className='p-5 bg-neutral-50 flex-1 justify-center items-center'>
                <View className='flex justify-center items-center w-full'>
                    <Text className='text-4xl uppercase text-center'>Welcome to After Me</Text>
                    <Text className='text-xl font-medium'>Your private offline diary</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Index;