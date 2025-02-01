import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState('');
    const { dispatch } = useAuthContext();


    const signup = async (email, password) => {
        setLoading(true);
        setError(null)

        const response = await fetch("http://localhost:4000/api/user/signup", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" }
        })

        const json = await response.json();

        if (!response.ok) {
            setLoading(false);
            setError(json.error)
        }
        if (response.ok) {
            //save the user to localStorage
            localStorage.setItem("user", JSON.stringify(json))

            //update authContext
            dispatch({ type: "LOGIN", payload: json })

            setLoading(false)
        }
    }

    return { error, isLoading, signup }
}