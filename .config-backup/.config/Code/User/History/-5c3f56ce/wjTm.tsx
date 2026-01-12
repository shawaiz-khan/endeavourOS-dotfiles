import { TUser } from '@/types';
import React, { createContext, useState } from 'react';
import { Text, View } from 'react-native';
import { TAuthContext } from './types';

const AuthContext = createContext<TAuthContext | null>(null);

const AuthProvider = () => {
    const [user, setUser] = useState<TUser>({
        username: "",
        password: "",
    });

    return (
        <View>
            <Text>AuthProvider</Text>
        </View>
    )
}

export default AuthProvider;