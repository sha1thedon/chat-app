import React from "react";
import { useState } from "react";

const MessageBox = ({socket}) => {
    const [input, setInput] = useState('')
    const [ message, setMessage] = useState([])

    const messageInput = () => {
        return (
          <div>
            <input onChange={onInputHandler} placeholder='Send a message'/>
            <button id = 'button' onClick={sendToServer} className='send-message'>Send Message</button>
          </div>
        )
      }


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
  

    const validMessage = (e) => {
        return true
      }
    
    
      socket.onmessage = ({ data }) => {
        console.log('message from server', data)
        console.log(data)
        const myNewArray = [...message]
        myNewArray.push(data)
        setMessage(myNewArray)
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
    
      const messageList = () => {
        return (
          <div>
            {message.map((text, index) => <h1 key={index} id = 'message'>{text}</h1>)}
          </div>
        )
       }

    return (
        <div className="message-box">
        {messageList()}
        {messageInput()}
      </div>
    )

}

export default MessageBox
