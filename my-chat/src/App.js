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



  s.addEventListener('message', (event) => {
    console.log('event is ', event)
    if(JSON.parse(event.data).messageType ===  'create a room'){
      navigate('/homepage')
    }
    if(JSON.parse(event.data).messageType ===  'joined room'){
      navigate('/homepage')
    }
      
  })

  const createRoom = () => {
    s.send(JSON.stringify({
      messageType: 'createRoom'
    }))

  }

  const joinRoom = (input) => {
    s.send(JSON.stringify({
      messageType: 'joinRoom',
      data: input
    }))


  }

    
  const checkCurrentRoomID = (event) => {
    setInput(event.target.value)
}   
  s.addEventListener('open', () => {
    console.log('socketOpen: Client says: websocket is connected')
})

  return(
    
    
    <div className='App'>
      {/* <button onClick={generateRoomID}>Generate Room ID</button> */}
      <RouteButton buttonText={'Generate Chat'} pageClickHandler={createRoom} ></RouteButton>
      <input id='room-id-input' type='text' value = {input} onChange={checkCurrentRoomID}/>
      <button onClick={() => joinRoom(input)} >Join Room</button>
      
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
