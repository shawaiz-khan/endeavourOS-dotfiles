import diary_icon from "@/assets/images/diary.png";
import { Link } from "expo-router";
import React from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';

const RegisterScreen = () => {
    return (
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
                <Pressable className="flex justify-center items-center w-full bg-neutral-900 px-5 py-2 rounded">
                    <Text className="text-lg text-neutral-50">Create Account</Text>
                </Pressable>
            </View>


            {/* At the very bottom */}
            <Text className='text-lg -mt-2 w-full text-neutral-900 text-center leading-none tracking-tight font-medium'>
                Already have an Account? <Link href={"/login"} className="underline underline-offset-2">Login</Link>
            </Text>
        </View>
    )
}

export default RegisterScreen;