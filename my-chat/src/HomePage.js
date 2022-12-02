import React from 'react'
import { useEffect, useState, useRef } from 'react'
import RouteButton from './components/RouteButton'
// import {w3cwebsocket as W3CWebSocket} from 'websocket'
import {useNavigate} from 'react-router-dom'


const socket = new WebSocket ('ws://localhost:8082')



const HomePage = () => {
  const [ message, setMessage] = useState([])
  const [input, setInput] = useState('')
  
  

    const sendToServer = () => {
      // const myNewArray = [...message]
      //   myNewArray.push(input)
      //   setMessage(myNewArray)
      // setMessage()
      //onSubmit()
      socket.send(input)
      // event.preventDefault()
      console.log('sendToServer: ', input)
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
        setInput(event.target.value)
          // setMessage([event.target.value])
          console.log('onInputHandler if: ', event.target.value)
      } else {
        setInput('')
          // setMessage([])
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
        const myNewArray = [...message]
        myNewArray.push(data)
        setMessage(myNewArray)
      }

     const messageList = () => {
      return (
        <div>
          {message.map((text, index) => <h1 key={index} id = 'message'>{text}</h1>)}
        </div>
      )
     }
    
     console.log('message = ',message)
      return (
        <div className="App">
          {messageList()}
          {messageInput()}
         
          
        </div>
      );
    

}
export default HomePage
