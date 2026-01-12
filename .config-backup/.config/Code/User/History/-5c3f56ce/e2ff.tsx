import { TUser } from '@/types';
import React, { createContext, ReactNode, useState } from 'react';
import { TAuthContext } from './types';

export const AuthContext = createContext<TAuthContext>({
    user: null,
    setUser: () => { }
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<TUser | null>({
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