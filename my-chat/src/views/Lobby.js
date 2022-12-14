import React, { useEffect, useState } from 'react'
import RouteButton from '../components/RouteButton'
import { useNavigate } from 'react-router-dom'

const Lobby = ({chatState, messengerObject, currentView, roomIDlist, setRoomIDlist}) => {
    const navigate = useNavigate()
    const [lobbies, setLobbies] = useState([])
    const [selectedLobby, setSelectedLobby] = useState(null)
    const [error, setError] = useState(null)

   const navigateToHomePage = () => {
        navigate('/homepage')
   }

    useEffect(() => {
       if(currentView === '/'){
        navigateToHomePage()
       }
    }, [currentView])


    return(
        <RouteButton buttonText={'Join Chat'} pageClickHandler={navigateToHomePage}></RouteButton>
    )

    


}

export default Lobby
