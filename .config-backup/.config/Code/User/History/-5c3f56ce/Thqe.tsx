import { TUser } from '@/types';
import React, { createContext, ReactNode, useState } from 'react';
import { TAuthContext } from './types';

const AuthContext = createContext<TAuthContext>({
    user: null,
    setUser: () => { }
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
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