import { TUser } from '@/types';
import React, { createContext, useState } from 'react';
import { TAuthContext } from './types';

const AuthContext = createContext<TAuthContext | null>(null);

const AuthProvider = () => {
    const [user, setUser] = useState<TUser>({
        username: "",
        password: "",
    });

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;