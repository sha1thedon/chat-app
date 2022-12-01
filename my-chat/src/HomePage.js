import React from 'react'
import { useEffect, useState, useRef } from 'react'
import RouteButton from './components/RouteButton'
// import {w3cwebsocket as W3CWebSocket} from 'websocket'
import {useNavigate} from 'react-router-dom'


const socket = new WebSocket ('ws://localhost:8082')



const HomePage = () => {
  const [ message, setMessage] = useState('')
  const messInput = useRef(null)

    const sendToServer = (event) => {
      socket.send('hello')
      event.preventDefault()
      setMessage(event.target.value)
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
          setMessage(event.target.value)
      } else {
          setMessage('')
      }
  }

    const messageInput = () => {
      return (
        <div>
          <input ref = {messInput} onChange={onInputHandler} placeholder='Send a message'/>
          <button onClick={sendToServer} className='send-message'>Send Message</button>
        </div>
      )
    }

   
      
    socket.onmessage = ({ data }) => {
      console.log('message from server', data)
      console.log(data)
    }
     
      return (
        <div className="App">
          <h1>Message: {message}</h1>
          {messageInput()}
          
        </div>
      );
    

}
export default HomePage
