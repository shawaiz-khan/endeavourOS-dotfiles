import diary_icon from "@/assets/images/diary.png";
import React from 'react';
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const RegisterScreen = () => {
    return (
        <SafeAreaView className='flex-1 bg-neutral-50'>
            <View className='px-5 flex-1 flex justify-center items-center flex-col gap-10'>
                {/* Main Title */}
                <View className='w-full'>
                    <Image
                        source={diary_icon}
                        className="max-w-40 h-fit bg-red-400"
                    // resizeMode="contain"
                    />

                    <Text className='text-2xl w-full text-neutral-900 text-center leading-none tracking-tight font-bold'>
                        Register to Start Writing your Thoughts
                    </Text>
                </View>

                {/* Forms */}
                <View className='w-full flex flex-col gap-3'>
                    {/* Username Input */}
                    <View className='flex justify-center items-start'>
                        <Text className='font-bold text-lg text-neutral-700'>Username</Text>
                        <TextInput
                            className='border-2 border-neutral-400 focus:border-neutral-900 focus:outline-none rounded-md w-full py-3 px-2'
                            placeholder='e.g, @shawaiz'
                            value=''
                            onChange={() => void [0]}
                        />
                    </View>

                    {/* Password Input */}
                    <View className='flex justify-center items-start'>
                        <Text className='font-bold text-lg text-neutral-700'>Password</Text>
                        <TextInput
                            className='border-2 border-neutral-400 focus:border-neutral-900 focus:outline-none rounded-md w-full py-3 px-2'
                            placeholder='e.g, strongpassword'
                            value=''
                            onChange={() => void [0]}
                        />
                    </View>

                    {/* Button */}
                    <TouchableOpacity>
                        <Button
                            title='Create Account'
                        />
                    </TouchableOpacity>
                </View>


                {/* At the very bottom */}
                <Text className='text-xl w-full text-neutral-900 text-center leading-none tracking-tight font-medium'>
                    Register to Start Writing your Thoughts in your Personal Diary
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default RegisterScreen;