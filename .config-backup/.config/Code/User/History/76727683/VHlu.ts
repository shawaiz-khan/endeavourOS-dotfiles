import { useState } from "react";

export default function useKeycloak() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const checkAuth = async () => {
        
    }
}