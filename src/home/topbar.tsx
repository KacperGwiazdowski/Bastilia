import React from "react";
import { useHistory } from "react-router";
import "./topbar.css"


export const Topbar = () => {
    const history = useHistory()
    return <div className="flex-container topbar">
        <div className="name">Bastilia</div>
        <div><button onClick={() => {
            localStorage.setItem('authenticated', 'false')
            history.push('/login');
            }}>Logout</button></div>
    </div>
}