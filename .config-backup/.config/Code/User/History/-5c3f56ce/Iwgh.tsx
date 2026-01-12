import { IAuthContext } from '@/types';
import React, { createContext } from 'react';
import { Text, View } from 'react-native';

const AuthContext = createContext<IAuthContext | null>({ username: "", password: "" });

export default function AuthProvider() {
    
    
    return (
        <View>
            <Text>AuthContext</Text>
        </View>
    )
}