import React, { useState } from "react";
import { useHistory } from "react-router";
import './form.css'

type LoginStateType = {
    username: string;
    password: string;
}

export const Form = () => {

    const history = useHistory();

    const HandleLogin = () => {
        const loginSuccesful = loginState.password === "password" && loginState.username === "username";
        if(loginSuccesful)
        {
            localStorage.setItem('authenticated', 'true')
            history.push("/home")
        }
    }

    const [loginState, setLoginState] = useState<LoginStateType>({username: "", password: ""})

    return <div className="flex-container login">
        <form className="flex-container login-container vertical">
            <div className="name">Bastilia</div>
            <div className="flex-container vertical">
                <label>Username:</label>
                <input type="text" onChange={(e) => setLoginState({...loginState, username: e.target.value})} />
            </div>
            <div className="flex-container vertical">
                <label>Password:</label>
                <input type="password" onChange={(e) => setLoginState({...loginState, password: e.target.value})}/>
            </div>
            <div>
                <button onClick={(e) => {
                    e.preventDefault();
                    HandleLogin();
                }}>Login</button>
            </div>
        </form>
    </div>
}