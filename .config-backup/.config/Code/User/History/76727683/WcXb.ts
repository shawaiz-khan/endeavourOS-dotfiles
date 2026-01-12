import keycloak from "@/lib/keycloak";
import { useState } from "react";

export default function useKeycloak() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const checkAuth = async () => {
        let isAuth = await keycloak.init();
    }
}