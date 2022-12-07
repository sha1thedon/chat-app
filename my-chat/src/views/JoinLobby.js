import React from "react";
import RouteButton from "../components/RouteButton";
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const JoinLobby = ({socket, messengerObject, setMyRoomID}) => {
    const [currentRoomID, setCurrentRoomID] = useState('')
    const navigate = useNavigate()
    const [lobbyID, setLobbyID] = useState(null)
    const [users, setUsers] = useState([])
    const navigateToLobby = () => {
        // setMyRoomID(currentRoomID)
        // const joinRoomObject = {
        //     type: 'joinRoom',
        //     roomID: currentRoomID,
        //     player: messengerObject
        // }
        // const messageToSend = {
        //     action: 'send',
        //     message: joinRoomObject
        // }
        // console.log('sending to websocket server ', joinRoomObject)
        // socket.send(JSON.stringify(messageToSend))

        console.log('navigation into lobby')
        navigate('/lobby')
    }

    // const joinLobbyID = () => {
    //     axios.post('/joinlobby' + lobbyID).then(response => {
    //         setLobbyID({
    //             lobbyID: response.data.id,
    //             users: response.data.users
    //         })
    //     })
    // }

    return(
        <div>
            <h1>Join lobby</h1>  
            <h1 className='iw-medium-text'>Join lobby</h1>
                <h2 className='iw-medium-text'>You are: {messengerObject.name}</h2>
                <input id='room-id-input' type='text' onChange={(e) => setCurrentRoomID(e.target.value)} />
            <RouteButton buttonText={'Join Chat'} pageClickHandler={navigateToLobby}></RouteButton>
        </div>
    )
}

export default JoinLobby
