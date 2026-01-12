import keycloak from "@/lib/keycloak";
import { useState } from "react";

export default function useKeycloak() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const checkAuth = async () => {
        try {
            let isAuth = await keycloak.init();
        } catch (err: unknown) {
            console.error("Failed to initialize Keycloak: ", err)
        }
    }
}