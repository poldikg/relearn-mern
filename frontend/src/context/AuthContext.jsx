import { React, createContext, useReducer, useEffect } from "react";

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

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));

        if (user) {
            dispatch({ type: "LOGIN", payload: user })
        }


    }, [])

    console.log("AuthContext state", state)
    return (
        <authContext.Provider value={{ ...state, dispatch }}>
            {props.children}
        </authContext.Provider >
    )
}

export default AuthContextProvider