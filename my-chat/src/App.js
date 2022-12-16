import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import React from 'react'
import Login from './views/Login'
import HomePage from './views/HomePage'
import CreateLobby from './views/CreateLobby'
import JoinLobby from './views/JoinLobby'
import Lobby from './views/Lobby'
import './fonts/InterWorks-Medium.ttf'
import './fonts/InterWorks-Regular.ttf'
import {useNavigate} from 'react-router-dom'
import RouteButton from "./components/RouteButton";

let wsAddress = 'ws://localhost'
 let ws = "ws://localhost:8082"
 let s = new WebSocket (ws)

 let lobbyList = []
 const userList = []
 const lobby = {
  'id': 0,
  'users': userList,
  'websocket': s,
  'messages': []
}

function App (){
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  let isJoiner = false

  lobbyList.push(1234)
  console.log('lobby list at app.js is ', lobbyList)

  function generateRandomWebsocket (wss) {
    let min = 8000;
    let max = 9000;
    let port =  Math.floor(Math.random() * (max - min + 1)) + min;
    let wsUrl = wsAddress + ':' + port
    wss = new WebSocket (wsUrl)
  }


  const user = {
    'name': '',
    'id': 0
  }


  const createRoom = () => {
    console.log('generateLobby: lobbyList is ', lobbyList)
    const newLobby = {
      'id': generateRoomID(),
      'users': userList,
      'websocket': s,
      'messages': []
    }
    lobbyList.push(newLobby)

   
      navigate('/homepage')
  
  
    }



  
  

  const generateRoomID = () => {
    let randomNumber = Math.random()

    let ID = randomNumber.toString(36).substring(2, 15) + randomNumber.toString(36).substring(2, 15)
    console.log('ID is ', ID)
    return ID
}

  const joinRoom = () => {
    console.log('lobby list at joinroom is ', lobbyList)
    console.log(input)

    lobbyList.forEach(function(item){
      console.log('item is ', item)
      console.log('item.id = ', item.id)
      if (input === item.id){
        
        navigate('/homepage')
      }
      else{console.log('try again')}
    })

  }
  const checkCurrentRoomID = (event) => {
    setInput(event.target.value)
}   
  s.addEventListener('open', () => {
    console.log('socketOpen: Client says: websocket is connected')
})

  return(
    
    
    <div className='App'>
      <button onClick={generateRoomID}>Generate Room ID</button>
      <RouteButton buttonText={'Generate Chat'} pageClickHandler={createRoom} isjoiner={false}></RouteButton>
      <input id='room-id-input' type='text' value = {input} onChange={checkCurrentRoomID}/>
      <button onClick={joinRoom} isJoiner={true}>Join Room</button>
      
      <Routes>
      <Route path = '/' element = {<Login/>}/>
      <Route path = '/homepage' element = {<HomePage s={s}/>}/>
      </Routes>
    </div>
   
  )
}

export default App

//homepage.js parameterised and rename to room
//app.js have a function called createroom creates roomlist
//join room will navigate to the room component
