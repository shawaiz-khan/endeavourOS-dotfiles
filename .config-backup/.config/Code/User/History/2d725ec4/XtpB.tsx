import useAuth from '@/hooks/useAuth';
import React from 'react';

const Index = () => {
    const user = useAuth();

    return (
        <>
            {user.user?.username}
        </>
    )
}

export default Index;