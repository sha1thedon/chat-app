import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import React from 'react'
import Login from './views/Login'
import HomePage from './views/HomePage'
import CreateLobby from './views/CreateLobby'
import JoinLobby from './views/JoinLobby'
import Lobby from './views/Lobby'

const socket = new WebSocket ('ws://localhost:8082')
function App (){
  const [roomIDlist, setRoomIDlist] = useState([])

  // const [messengerObject, setMessengerObject] = useState({name: '', id: ''})
  // const [chatState, setChatState] = useState({
  //   roomID:" -1",
  //   chatState:{
  //     messengerList: [{
  //       name: '',
  //       id: '',
  //     }],
  //     messages: [],

  //   }
  // })

  
  // const [myRoomID, setMyRoomID] = useState('')
  // const [currentView, setCurrentView] = useState('/')

  // useEffect(() => {
  //   socket.onmessage = (response) => {
  //     const dataObject = JSON.parse(response.data)
  //     if(dataObject.type === 'idMessage'){
  //       const newMessengerObject = {...messengerObject}
  //       newMessengerObject.id = dataObject.id
  //       setMessengerObject(newMessengerObject)
  //     }
  //     else if(dataObject.type === 'newRoomCreated'){
  //       setMyRoomID(dataObject.roomID)
  //       const explodedChatState = {...chatState}
  //       explodedChatState.chatState = dataObject.chatState
  //       explodedChatState.roomID = dataObject.roomID
  //       setChatState(explodedChatState)
  //     }
  //     else if(dataObject.type === 'updateRoom'){
  //       const myNewChatState = dataObject.chatState
  //       const matchingPlayers = myNewChatState.chatState.messengerList.filter((player) => {
  //         return player.id === messengerObject.id
  //       })
  //       const myNewPlayerObj = {...matchingPlayers[0]}
  //       console.log('socketListener: startGame new player object = ', myNewPlayerObj)
  //       setMessengerObject(myNewPlayerObj)
  //       console.log('socketListener: new gameState after updateRoom = ', myNewChatState)
  //       setChatState(myNewChatState)
  
  //     }
  //     else if(dataObject.type === 'startGame')
  //           {
  //               console.log('socketListener: startGame message received ', dataObject)
  //               const myRoomIDString = myRoomID.toString()
  //               const dataObjectRoomIDString = dataObject.roomID.toString()
  //               console.log('socketListener: startGame myRoomID = ', myRoomIDString, 'dataObject.roomID = ', dataObjectRoomIDString)
  //               if(myRoomIDString === dataObjectRoomIDString)
  //               {
  //                   const myNewChatState = dataObject.startingGameState
  //                   console.log('socketListener: new gameState after startGame = ', myNewChatState)

  //                   // filter the new game state players to find 'me', i.e. matching player.id
  //                   const matchingPlayers = myNewChatState.chatState.messengerList.filter((player) => {
  //                       return player.id === messengerObject.id
  //                   })
  //                   // update the local player object to match
  //                   const myNewPlayerObj = {...matchingPlayers[0]}
  //                   console.log('socketListener: startGame new player object = ', myNewPlayerObj)

  //                   setChatState(myNewChatState)

  //                   setMessengerObject(myNewPlayerObj)
  //                   console.log('socketListener: startGame setting currentView to /game')
  //                   setCurrentView('/homepage')
  //               }}
  //             else{
  //       console.log('socketListener: startGame nothing to do')
  //     }}
    

  // }, [chatState, myRoomID, messengerObject])

  socket.addEventListener('open', () => {
    console.log('socketOpen: Client says: websocket is connected')
})

  return(
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path = '/' element = {<Login/>}/>
        <Route path = '/homepage' element = {<HomePage socket={socket} />}/>
        <Route path = '/createlobby' element = {<CreateLobby socket={socket} roomIDlist={roomIDlist} setRoomIDlist={setRoomIDlist}/>}/>
        <Route path = '/joinlobby' element = {<JoinLobby socket={socket} roomIDlist={roomIDlist} setRoomIDlist={setRoomIDlist}/>}/>
        <Route path = 'lobby' element = {<Lobby socket={socket} roomIDlist={roomIDlist} setRoomIDlist={setRoomIDlist}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
