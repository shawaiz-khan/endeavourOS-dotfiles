import diary_icon from "@/assets/images/diary.png";
import { Link } from "expo-router";
import React from 'react';
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const RegisterScreen = () => {
    return (
        <SafeAreaView className='flex-1 bg-neutral-50'>
            <View className='px-5 flex-1 flex justify-center items-center flex-col gap-5 max-w-sm mx-auto'>
                {/* Main Title */}
                <View className='flex justify-center items-center gap-8 max-w-72 mx-auto'>
                    <Image
                        source={diary_icon}
                        className="max-w-32 max-h-32 mx-auto"
                        resizeMode="contain"
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
                <Text className='text-lg -mt-2 w-full text-neutral-900 text-center leading-none tracking-tight font-medium'>
                    Already have an Account? <Link href={"/login"}>Login</Link>
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default RegisterScreen;