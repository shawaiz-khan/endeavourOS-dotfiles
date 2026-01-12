import { IAuthContext } from '@/types';
import React, { createContext } from 'react';
import { Text, View } from 'react-native';

const newAuthContext = createContext<IAuthContext | null>({ username: "", password: "" });

export default function AuthContext() {
    return (
        <View>
            <Text>AuthContext</Text>
        </View>
    )
}