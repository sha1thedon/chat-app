import React from "react";
import RouteButton from "../components/RouteButton";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()

    const navigateToHomePage = () => {
        console.log('navigate home called')
        navigate('/homepage')

    }

    return (
        <div>
        <h1>Login page</h1>
        <RouteButton buttonText={'Login'} pageClickHandler={navigateToHomePage}></RouteButton>
        </div>
    )

}

export default Login
