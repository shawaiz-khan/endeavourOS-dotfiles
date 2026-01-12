import useAuth from '@/hooks/useAuth';
import { Redirect } from 'expo-router';
import React from 'react';

const Index = () => {
    const { user } = useAuth();

    return (
        <>
            {user && (user.username && user.password) ? (
                <Redirect href={'/home'} />
            ) : (
                <Redirect href={'/register'} />
            )}
        </>
    )
}

export default Index;