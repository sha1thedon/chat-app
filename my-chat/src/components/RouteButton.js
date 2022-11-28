import React from 'react'

const RouteButton = ({buttonText, pageClickHandler}) => {
    return(
        <button type='button' className='sendButton' onClick={pageClickHandler}>{buttonText}</button>
    )
}

export default RouteButton
