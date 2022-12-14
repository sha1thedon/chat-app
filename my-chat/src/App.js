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


let wsAddress = 'ws://localhost'
 let ws = "ws://localhost:8082"
 let s = new WebSocket (ws)

 const lobbyList = []
 const userList = []
 const lobby = {
   'id': 0,
   'users': userList,
   'websocket': s,
   'messages': []
 }

function App (){



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


 
 


  s.addEventListener('open', () => {
    console.log('socketOpen: Client says: websocket is connected')
})

  return(
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path = '/' element = {<Login/>}/>
        <Route path = '/homepage' element = {<HomePage socket={s} generateRandomWebsocket={generateRandomWebsocket} user={user} userList={userList} lobbyList={lobbyList} lobby={lobby} wsAddress={wsAddress}/>}/>
        <Route path = '/createlobby' element = {<CreateLobby socket={s} generateRandomWebsocket={generateRandomWebsocket} user={user} userList={userList} lobbyList={lobbyList} lobby={lobby} wsAddress={wsAddress}/>}/>
        <Route path = '/joinlobby' element = {<JoinLobby socket={s} generateRandomWebsocket={generateRandomWebsocket} user={user} userList={userList} lobbyList={lobbyList} lobby={lobby} wsAddress={wsAddress}/>}/>
        <Route path = 'lobby' element = {<Lobby socket={s} generateRandomWebsocket={generateRandomWebsocket} user={user} userList={userList} lobbyList={lobbyList} lobby={lobby}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
