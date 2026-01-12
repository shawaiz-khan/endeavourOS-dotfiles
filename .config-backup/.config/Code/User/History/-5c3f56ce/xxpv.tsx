import { IAuthContext } from '@/types';
import React, { createContext, useState } from 'react';
import { Text, View } from 'react-native';

const AuthContext = createContext<IAuthContext | null>({ username: "", password: "" });

export default function AuthProvider({ children }) {
    const [auth, setAuth] = useState<IAuthContext | null>({ username: "", password: "" })

    return (
        <View>
            <Text>AuthContext</Text>
        </View>
    )
}