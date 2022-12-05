import React from 'react'
import MessageBox from '../components/MessageBox'
import { useEffect, useState, useRef } from 'react'
import RouteButton from '../components/RouteButton'
// import {w3cwebsocket as W3CWebSocket} from 'websocket'
import {useNavigate} from 'react-router-dom'






const HomePage = () => {
    // const onSubmit = () => {
    //   return <div>{message[0]}</div>
    // }
   
      return (
        <div className="App">

         <MessageBox></MessageBox>
          
        </div>
      );
    

}
export default HomePage
