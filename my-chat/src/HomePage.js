import React from 'react'
import { useEffect, useState } from 'react'
import RouteButton from './components/RouteButton'
// import {w3cwebsocket as W3CWebSocket} from 'websocket'
import {useNavigate} from 'react-router-dom'


const socket = new WebSocket ('ws://localhost:8082')

const HomePage = () => {
    const sendToServer = () => {
      socket.send('hello')
    }
    // const sendToServer = () => {
  
    //     socket.send(JSON.stringify({
    //       action: 'send',
    //       message: {
    //         type: 'messageSent',
    //       }
    //     }))
    //   }
    
    //  useEffect(() => {
    //     socket.onopen = () => {
    //       console.log('websocket client connected')
    //     }
    //     socket.onmessage = (message) => {
    //       const dataFromServer = JSON.parse(message.type)
    //       console.log('got reply ', dataFromServer)
    //     }
    
    //     socket.onclose = () => {
    //       setTimeout(1000)
    //     }})
      
    socket.onmessage = ({ data }) => {
      console.log('message from server', data)
      console.log(data)
  
      // const title = document.getElementById('title')
      // title.innerHTML = data
  
      // const str = data.toString()
      // if(str === 'button added'){
      //   const hiddenText = document.getElementById('button')
      //   hiddenText.innerHTML = data
      // }
    }
     
      return (
        <div className="App">
          <h1>Hello world</h1>
          <RouteButton buttonText={'Send Message'} pageClickHandler={sendToServer} />
          
        </div>
      );
    

}
export default HomePage
