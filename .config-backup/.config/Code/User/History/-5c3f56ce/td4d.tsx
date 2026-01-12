import { IAuthContext } from '@/types';
import React, { createContext, ReactNode, useState } from 'react';

const AuthContext = createContext<IAuthContext | null>({ username: "", password: "" });

export default function AuthProvider({ children }: ReactNode) {
    const [auth, setAuth] = useState<IAuthContext | null>({ username: "", password: "" })

    return (
        <AuthContext.Provider value={{ auth }}>
            {children}
        </AuthContext.Provider>
    )
}