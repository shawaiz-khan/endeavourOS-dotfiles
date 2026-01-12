import keycloak from "@/lib/keycloak";
import { useState } from "react";

export const useKeycloak = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    

    const checkAuth = async () => {
        try {
            let isAuth = await keycloak.init({ onLoad: "login-required" });

            if (!isAuth) {
                throw new Error("Not Authenticated");
            }

            console.log("Authenticated via Keycloak");
            setIsAuthenticated(isAuth);
        } catch (err: unknown) {
            console.error("Error: ", err instanceof Error ? err.message : err);
            setIsAuthenticated(false);
        }
    }
}