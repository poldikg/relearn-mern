import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    const { dispatch } = useAuthContext();

    const logout = () => {
        //remove user from storage
        localStorage.removeItem("user")

        //remove user from authContext
        dispatch({ type: "LOGOUT", payload: null })
    }

    return { logout };
}