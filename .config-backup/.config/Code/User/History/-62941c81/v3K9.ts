import { TUser } from "@/types";

export type TAuthContext = {
    user: TUser | null;
    setUser: (userData: TUser) => void;
};