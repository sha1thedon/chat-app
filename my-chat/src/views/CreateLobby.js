import React from "react";
import RouteButton from "../components/RouteButton";
import { useEffect, useState, useRef } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


const CreateLobby = ({socket, generateRandomWebsocket, user, userList, lobby, lobbyList, wsAddress}) => {
    const navigate = useNavigate()
   

    const generateRoomID = () => {
        let randomNumber = Math.random()

        let ID = randomNumber.toString(36).substring(2, 15) + randomNumber.toString(36).substring(2, 15)
        lobby.id = ID
                
        console.log('room id list is ' ,lobby.id)
    }
    
   const navigateToHomePage= () => {
        console.log('navigation into homepage')
        console.log('lobby information is ', lobby)
        let randomws = generateRandomWebsocket(wsAddress)
        lobby.websocket = randomws
        console.log('lobby.websocket ', lobby.websocket)
        console.log('randomws ', randomws)
        console.log('sending to socket server')
        // lobby.websocket.send('hello')
        navigate('/homepage')
        console.log('lobby id is ', lobby.id)
        lobbyList.push(lobby)
    
   }

   
    return (
        <div>
            <h1>Create Lobby</h1>
            <p>Room ID: {lobby.id}</p>

      {/* Button to generate a new room ID */}
            <button onClick={generateRoomID}>Generate Room ID</button>
            <RouteButton buttonText={'Start Chat'} pageClickHandler={navigateToHomePage}></RouteButton>
        </div>
    )
}

export default CreateLobby
