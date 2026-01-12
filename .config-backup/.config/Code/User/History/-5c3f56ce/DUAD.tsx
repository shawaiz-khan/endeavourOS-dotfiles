import React, { createContext } from 'react';
import { Text, View } from 'react-native';

const newAuthContext = createContext<null>(null);

export default function AuthContext() {
    return (
        <View>
            <Text>AuthContext</Text>
        </View>
    )
}