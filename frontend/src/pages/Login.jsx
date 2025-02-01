import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { error, isLoading, login } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(email, password);
    }
    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Login</h3>
            <label htmlFor="">Email:</label>
            <input type="email" name="" id="" onChange={(e) => setEmail(e.target.value)} value={email} />
            <label htmlFor="">Password:</label>
            <input type="password" name="" id="" onChange={(e) => setPassword(e.target.value)} value={password} />
            <button disabled={isLoading}>  Login </button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Login