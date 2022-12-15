import {Route, Routes} from 'react-router-dom'
import HomePage from '../views/HomePage'
import Login from '../views/Login'
import App from '../App'
import CreateLobby from '../views/CreateLobby'
import JoinLobby from '../views/JoinLobby'

const AppRoutes = () => {
    return(
        <Routes>
            <Route path = '/' element = {<Login/>}/>
            <Route path = '/homepage' element = {<HomePage/>}/>
            <Route path = '/createlobby' element = {<CreateLobby/>}/>
            <Route path = '/joinlobby' element = {<JoinLobby/>}/>
        </Routes>    
    )
}

export default AppRoutes
