import React from "react";
import RouteButton from "../components/RouteButton";
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'

const JoinLobby = ({socket, messengerObject, setMyRoomID}) => {
    const [currentRoomID, setCurrentRoomID] = useState('')
    const navigate = useNavigate()
    const navigateToHomePage = () => {
        setMyRoomID(currentRoomID)
        const joinRoomObject = {
            type: 'joinRoom',
            roomID: currentRoomID,
            player: messengerObject
        }
        const messageToSend = {
            action: 'send',
            message: joinRoomObject
        }
        console.log('sending to websocket server ', joinRoomObject)
        socket.send(JSON.stringify(messageToSend))

        console.log('navigation into homepage')
        navigate('/homepage')
    }

    return(
        <div>
            <h1>Join lobby</h1>  
            <h1 className='iw-medium-text'>Join lobby</h1>
                <h2 className='iw-medium-text'>You are: {messengerObject.name}</h2>
                <input id='room-id-input' type='text' onChange={(e) => setCurrentRoomID(e.target.value)} />
            <RouteButton buttonText={'Join Chat'} pageClickHandler={navigateToHomePage}></RouteButton>
        </div>
    )
}

export default JoinLobby
