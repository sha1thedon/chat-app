import React from "react";
import RouteButton from "../components/RouteButton";
import { useEffect, useState, useRef } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


const CreateLobby = ({socket, messengerObject, setRoomIDlist, roomIDlist}) => {
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

    const generateRoomID = () => {
        let randomNumber = Math.random()

        let ID = randomNumber.toString(36).substring(2, 15) + randomNumber.toString(36).substring(2, 15)
        setRoomID(ID)
        let newRoomIDlist = roomIDlist
        newRoomIDlist.push(ID)

        setRoomIDlist(newRoomIDlist)
        console.log('room id list is ', newRoomIDlist)
        console.log(roomIDlist)
    }
    
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

   
    return (
        <div>
            <h1>Create Lobby</h1>
            <p>Room ID: {roomID}</p>

      {/* Button to generate a new room ID */}
            <button onClick={generateRoomID}>Generate Room ID</button>
            <RouteButton buttonText={'Join Lobby'} pageClickHandler={navigateToLobby}></RouteButton>
        </div>
    )
}

export default CreateLobby
