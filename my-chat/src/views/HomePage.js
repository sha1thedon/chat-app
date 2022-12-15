import React from 'react'
import MessageBox from '../components/MessageBox'
import { useEffect, useState, useRef } from 'react'
import RouteButton from '../components/RouteButton'
// import {w3cwebsocket as W3CWebSocket} from 'websocket'
import {useNavigate} from 'react-router-dom'






const HomePage = ({s, generateRandomWebsocket, user, userList, lobbyList, lobby, wsAddress}) => {
    // const onSubmit = () => {
    //   return <div>{message[0]}</div>
    // }
   
      return (
        <div className="App">

         <MessageBox s={s} ></MessageBox>
         {console.log('lobby list at homepage is ', lobbyList)}
          
        </div>
      );
    

}
export default HomePage
