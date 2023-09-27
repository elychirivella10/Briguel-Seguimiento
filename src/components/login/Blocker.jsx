import React from 'react'

const Blocker = () => {
    if (!(localStorage.getItem('token'))) {
        window.location = '/login'
      } 
  return ( null )
}

export default Blocker