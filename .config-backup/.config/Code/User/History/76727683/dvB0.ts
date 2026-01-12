import keycloak from "@/lib/keycloak";
import { useEffect, useState } from "react";

export default function useKeycloak() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        keycloak.init({ onLoad: "login-required" })
            .then(auth => { setIsAuthenticated(auth) });
    }, []);

    return { keycloak, isAuthenticated }
}