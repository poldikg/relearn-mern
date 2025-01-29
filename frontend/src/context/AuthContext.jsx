import { React, createContext, useReducer } from "react";

export const authContext = createContext();

const authReducer = (state, action) => {
    if (action.type = "LOGIN") {
        return { user: action.payload }
    }
    if (action.type = "LOGOUT") {
        return { user: action.payload }
    }
    else {
        return state
    }
}

const AuthContextProvider = (props) => {
    const [state, dispatch] = useReducer(authReducer, { user: null })

    console.log("AuthContext state", state)
    return (
        <authContext.Provider value={{ ...state, dispatch }}>
            {props.children}
        </authContext.Provider >
    )
}

export default AuthContextProvider