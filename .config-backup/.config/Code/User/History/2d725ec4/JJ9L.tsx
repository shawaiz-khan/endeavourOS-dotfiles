import useAuth from '@/hooks/useAuth';
import { Redirect } from 'expo-router';
import React from 'react';

const Index = () => {
    const { user } = useAuth();

    return (
        <>
            {user && user.username ? (
                <Redirect href={'/home'} />
            ) : null}
        </>
    )
}

export default Index;