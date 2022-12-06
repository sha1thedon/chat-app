import React from "react";
import RouteButton from "../components/RouteButton";
import { useEffect, useState, useRef } from 'react'
import {useNavigate} from 'react-router-dom'

const CreateLobby = ({socket, messengerObject}) => {
    const navigate = useNavigate()
   const navigateToHomePage = () => {
        console.log('navigation into homepage')
        const createRoomObject = {
            action: 'send',
            message: {
                type: 'createRoom',
                player: messengerObject
            }
        }
        console.log('sending to socket server', createRoomObject)
        socket.send(JSON.stringify(createRoomObject))
        navigate('/homepage')
    
   }

    return (
        <div>
            <h1>Create Lobby</h1>
            <p className="create-lobby-status">
            {messengerObject.roomID}      
            </p>
            <RouteButton buttonText={'Join Chat'} pageClickHandler={navigateToHomePage}></RouteButton>
        </div>
    )
}

export default CreateLobby
