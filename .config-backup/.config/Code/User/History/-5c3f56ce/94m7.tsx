import React, { createContext } from 'react';
import { Text, View } from 'react-native';

const AuthContext = createContext(null);

const AuthProvider = () => {
    return (
        <View>
            <Text>AuthProvider</Text>
        </View>
    )
}

export default AuthProvider;