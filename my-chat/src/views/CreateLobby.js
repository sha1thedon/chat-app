import React from "react";
import RouteButton from "../components/RouteButton";
import { useEffect, useState, useRef } from 'react'
import {useNavigate} from 'react-router-dom'

const CreateLobby = () => {
    const navigate = useNavigate()
    const [roomID, setRoomID] = useState(null)

    const navigateToHomePage = () => {
        navigate('/homepage')
    }

    useEffect(() => {
        const id = Math.floor(Math.random()*1000000)
        setRoomID(id)
    }, [])

    return (
        <div>
            <h1>Room ID: {roomID}</h1>
            <RouteButton buttonText={'Join Chat'} pageClickHandler={navigateToHomePage}></RouteButton>
        </div>
    )
}

export default CreateLobby
