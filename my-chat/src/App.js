import './App.css'
import RouteButton from './components/RouteButton'
import React, {Component} from 'react'
import {w3cwebsocket as W3CWebSocket} from 'websocket'
import {useNavigate} from 'react-router-dom'
// import {Input} from 'antd'
// import 'antd/dist/antd.css'

// const {Search} = Input

const socket = new W3CWebSocket('ws://127.0.0.1:8000')

// const socket = new WebSocket('ws://localhost:8082')

// socket.onopen = (event) => {
//   socket.send('here is some data')
// }

// socket.onmessage = (e) => {
//   console.log('message from server ',e.data)
// }


// document.querySelector('button').onClick = () => {
//   socket.send('hello')
// }
// socket.addEventListener('open', () => {
//   console.log('We are connected')
// })


class App extends Component {

  sendToServer = () => {
  
    socket.send(JSON.stringify({
      action: 'send',
      message: {
        type: 'messageSent'
      }
    }))
  }

  componentDidMount(){
    socket.onopen = () => {
      console.log('websocket client connected')
    }
    socket.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data)
      console.log('got reply ', dataFromServer)
    }

    socket.onclose = () => {
      setTimeout(1000)
    }
  }
  render(){
  return (
    <div className="App">
      <h1>Hello world</h1>
      <RouteButton buttonText={'Send Message'} pageClickHandler={this.sendToServer}/>
      <RouteButton buttonText={'Login'} pageClickHandler={this.sendToServer}/>
    </div>
  );
}}

export default App;
