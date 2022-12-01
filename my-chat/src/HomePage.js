import React from 'react'
import { useEffect, useState, useRef } from 'react'
import RouteButton from './components/RouteButton'
// import {w3cwebsocket as W3CWebSocket} from 'websocket'
import {useNavigate} from 'react-router-dom'


const socket = new WebSocket ('ws://localhost:8082')



const HomePage = () => {
  const [ message, setMessage] = useState([])
  
  

    const sendToServer = () => {
      // setMessage()
      //onSubmit()
      socket.send(message[0])
      // event.preventDefault()
      console.log('sendToServer: ', message[0])
    }

    //  const buttonClicked = () => {
    //   const button = document.getElementsByClassName('send-message')
    //   button.addEventListener('click', () => {
    //     return true

    //   })
    // }

    const validMessage = (e) => {
      return true
    }

    const onInputHandler = (event) => {
      if(validMessage(event.target.value)){
          setMessage([event.target.value])
          console.log('onInputHandler if: ', event.target.value)
      } else {
          setMessage([])
          console.log('onInputHandler else: ', event.target.value)
      }
    }

    const messageInput = () => {
      return (
        <div>
          <input onChange={onInputHandler} placeholder='Send a message'/>
          <button id = 'button' onClick={sendToServer} className='send-message'>Send Message</button>
        </div>
      )
    }

    // const onSubmit = () => {
    //   return <div>{message[0]}</div>
    // }
   
   
      socket.onmessage = ({ data }) => {
        console.log('message from server', data)
        console.log(data)
        setMessage(data => [...message, data])
      }

     
    
     console.log(message)
      return (
        <div className="App">
          <h1 id = 'message'>{message[0]}</h1>
          {messageInput()}
         
          
        </div>
      );
    

}
export default HomePage
