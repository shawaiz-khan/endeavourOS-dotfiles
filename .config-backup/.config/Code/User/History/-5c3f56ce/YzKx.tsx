import React, { createContext } from 'react';
import { Text, View } from 'react-native';
import { TAuthContext } from './types';

const AuthContext = createContext<TAuthContext | null>(null);

const AuthProvider = () => {
    
    
    return (
        <View>
            <Text>AuthProvider</Text>
        </View>
    )
}

export default AuthProvider;