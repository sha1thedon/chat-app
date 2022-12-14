import React, {useRef} from "react";
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
        <div className="align-items-center d-flex">
        <h1>Login page</h1>
        <RouteButton className="create-room" buttonText={'Create Room'} pageClickHandler={navigateToCreateLobbyPage}></RouteButton>
        <RouteButton buttonText={'Join Room'} pageClickHandler={navigateToJoinLobbyPage}></RouteButton>
        </div>
    )

}

export default Login
