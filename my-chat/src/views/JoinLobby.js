import React from "react";
import RouteButton from "../components/RouteButton";
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const JoinLobby = ({socket, messengerObject, setMyRoomID, roomIDlist, setRoomIDlist}) => {
    // const [currentRoomID, setCurrentRoomID] = useState('')
    const [input, setInput] = useState('')
    const navigate = useNavigate()
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

        console.log('navigate to lobby')
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


    const checkCurrentRoomID = (event) => {
        setInput(event.target.value)
    }   
    

    
    return(
        <div>
            <h1>Join lobby</h1>  
            <input id='room-id-input' type='text' value = {input} onChange={checkCurrentRoomID} />
            <RouteButton buttonText={'Join Lobby'} pageClickHandler={navigateToLobby}></RouteButton>
            {/* <button id = 'button' onClick={navigateToLobby} className='send-message'>Join Lobby</button> */}
        </div>
    )
}

export default JoinLobby
