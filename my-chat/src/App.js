import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import React from 'react'
import Login from './views/Login'
import HomePage from './views/HomePage'
import CreateLobby from './views/CreateLobby'
import JoinLobby from './views/JoinLobby'

function App (){
  return(
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path = '/' element = {<Login/>}/>
        <Route path = '/homepage' element = {<HomePage/>}/>
        <Route path = '/createlobby' element = {<CreateLobby/>}/>
        <Route path = '/joinlobby' element = {<JoinLobby/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
