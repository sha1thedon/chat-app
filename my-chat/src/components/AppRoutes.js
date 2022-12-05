import {Route, Routes} from 'react-router-dom'
import HomePage from '../views/HomePage'
import Login from '../views/Login'

const AppRoutes = () => {
    return(
        <Routes>
            <Route path = '/' element = {<Login/>}/>
            <Route path = '/homepage' element = {<HomePage/>}/>
        </Routes>    
    )
}

export default AppRoutes
