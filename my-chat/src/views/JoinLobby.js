import React from "react";
import RouteButton from "../components/RouteButton";
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'

const JoinLobby = ({socket, wsAddress, lobby, lobbyList, user, userList}) => {
    // const [currentRoomID, setCurrentRoomID] = useState('')
    const [input, setInput] = useState('')
    const navigate = useNavigate()
    const navigateToHomePage = () => {
        
           console.log('lobby list at join lobby is ', lobbyList)
            console.log('input is ', input)
        
            // if (roomIDlist.includes(input)){
            // console.log('navigate to lobby')
            // navigate('/lobby')}
            // else{
            //     console.log('invalid room id')
            // }
            console.log('lobby id is ', lobby.id)
            console.log('navigate to homepage')

            for (let i =0; i<lobbyList.length; i++){
                let obj = lobbyList[i]
                console.log('obj is ', obj)
            if (obj.toString() === input){
                navigate('/homepage')
            }
            else{
                console.log('invalid id')
            } }
    
        
    }

    const checkCurrentRoomID = (event) => {
        setInput(event.target.value)
    }   
    

    
    return(
        <div>
            <h1>Join lobby</h1>  
            <input id='room-id-input' type='text' value = {input} onChange={checkCurrentRoomID} />
            <RouteButton buttonText={'Join Chat'} pageClickHandler={navigateToHomePage}></RouteButton>
            {/* <button id = 'button' onClick={navigateToLobby} className='send-message'>Join Lobby</button> */}
        </div>
    )
}

export default JoinLobby
