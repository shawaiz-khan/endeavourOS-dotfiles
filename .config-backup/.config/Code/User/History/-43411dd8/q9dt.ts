import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '@/contexts/AuthContext'

const useAuth = () => {
    const auth = useContext(AuthContext);

    if (!auth) {}
}

export default useAuth