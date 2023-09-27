import React from 'react'

const Logout = () => {

    const onClick = async() =>{
        await localStorage.removeItem('token')  
        window.location = '/login'
    }
  return (
    <div>
        <button className = "button is-fullwidth is-red mb-4" onClick={onClick}>Salir</button>
    </div>
  )
}

export default Logout