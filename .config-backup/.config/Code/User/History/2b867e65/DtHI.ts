import { AuthContext } from "@/contexts/authContext";
import { useContext } from "react";

const useAuth = () => {
    const auth = useContext(AuthContext);

    if (!auth) {
    }

    return auth;
};

export default useAuth;