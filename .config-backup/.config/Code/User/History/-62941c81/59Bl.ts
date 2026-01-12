import { TUser } from "@/types";

export type TAuthContext = {
    user: TUser;
    setUser: () => void;
};