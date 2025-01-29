import { useContext } from "react";
import { authContext } from "../context/AuthContext";

const useAuthContext = () => {

    const context = useContext(authContext);

    if (!context) {
        throw Error("useAuthContext must be used inside AuthContextProvider tree/scope")
    }

    return context

}