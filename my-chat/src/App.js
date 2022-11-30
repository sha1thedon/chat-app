import './App.css'

import React from 'react'


import HomePage from './HomePage.js'

// import {Input} from 'antd'
// import 'antd/dist/antd.css'

// const {Search} = Input


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


function App (){
  return(
    <div className='App'>
      <HomePage></HomePage>
    </div>
  )
}

export default App
