import React from "react";
import RouteButton from "../components/RouteButton";
import {useNavigate} from 'react-router-dom'

const JoinLobby = () => {
    const navigate = useNavigate()
    const navigateToHomePage = () => {
        navigate('/homepage')
    }

    return(
        <div>
            <h1>Join lobby</h1>
            <RouteButton buttonText={'Join Chat'} pageClickHandler={navigateToHomePage}></RouteButton>
        </div>
    )
}

export default JoinLobby
