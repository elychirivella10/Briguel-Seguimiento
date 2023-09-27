import React from 'react'
//NAVBAR DE LOGIN//
//Assets
import Logo from 'assets/logo.png'

const NavbarBasic=()=>{
    return(
        <nav className="navbar">
            <div className="container is-justify-content-center">
                <div className="navbar-brand is-justify-content-center">
                <p className="navbar-item">
                    <span className='is-pointer is-size-6 pr-2 border-logo' >Seguimiento EVA</span>
                    <img src={Logo} alt="logo" className='pl-2'/>
                    <span className='has-text-weight-semibold is-pointer is-size-6' >SAPI</span>
                </p>
                </div>
            </div>
        </nav>
    )
}

export default NavbarBasic