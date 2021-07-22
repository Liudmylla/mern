import { createContext } from "react";
import { noop } from "rxjs";

export const AuthContext = createContext({
    token:null,
    userId:null,
    login:noop,
    logout:noop,
    isAuthenticated: false
})