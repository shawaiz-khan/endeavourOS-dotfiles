import { AuthContext } from '@/contexts/AuthContext';
import { useContext } from 'react';

const useAuth = () => {
    const ctx = useContext(AuthContext);

    if (!ctx) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return ctx;
}

export default useAuth;