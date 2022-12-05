import React from "react";
import RouteButton from "../components/RouteButton";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()

    const navigateToCreateLobbyPage = () => {
        console.log('navigate create lobby called')
        navigate('/createlobby')

    }

    const navigateToJoinLobbyPage = () => {
        console.log('navigate create lobby called')
        navigate('/joinlobby')

    }

    return (
        <div>
        <h1>Login page</h1>
        <RouteButton buttonText={'Create Room'} pageClickHandler={navigateToCreateLobbyPage}></RouteButton>
        <RouteButton buttonText={'Join Room'} pageClickHandler={navigateToJoinLobbyPage}></RouteButton>
        </div>
    )

}

export default Login
