import React from "react";
import RouteButton from "../components/RouteButton";
import { useEffect, useState, useRef } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const CreateLobby = ({socket, messengerObject}) => {
    const navigate = useNavigate()
    const [roomID, setRoomID] = useState(null)
    
    // const [lobbyID, setLobbyID] = useState(null)
    // const [users, setUsers] = useState([])
    // state = {
    //     lobbyId: null,
    //     users: []
    //   }
    
        
    

    // const createLobbyID = () => {
    //     axios.post('/lobby', {
    //        id: randomNumber
    //     }).then(response => {setLobbyID({lobbyID: response.data.id})

    //     })
    //     console.log(lobbyID)
    //     return lobbyID
    // }

   const navigateToLobby = () => {
        console.log('navigation into lobby')
        const createRoomObject = {
            action: 'send',
            message: {
                type: 'createRoom',
                player: messengerObject
            }
        }
        console.log('sending to socket server', createRoomObject)
        socket.send(JSON.stringify(createRoomObject))
        navigate('/lobby')
    
   }

   useEffect(() => {
    const id = Math.floor(Math.random()*1000000)
    setRoomID(id)
}, [])

    return (
        <div>
            <h1>Create Lobby</h1>
            <p className="create-lobby-status">
            {roomID}      
            </p>
            <RouteButton buttonText={'Join Chat'} pageClickHandler={navigateToLobby}></RouteButton>
        </div>
    )
}

export default CreateLobby
