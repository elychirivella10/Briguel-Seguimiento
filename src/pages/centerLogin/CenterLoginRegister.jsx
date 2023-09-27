import React, {useEffect, useState} from 'react'

//redux
import {connect} from 'react-redux'
import {insertSitePage} from 'actions/sitePageActions'

//component 
import Login from 'components/login/Login'
import NavbarBasic from 'components/navbar/NavbarBasic'

//helpers
import {filterComponents} from 'helpers/filters/filterComponents'

const SelectCenter=({insertSiteCenter, site})=>{
    return(
        <div className='mb-5 mt-4'>
            <span className={`${site==='Login'?'':'has-text-grey-light'} has-text-weight-semibold is-pointer is-size-5`} id="Login" onClick={(e)=>{
                insertSiteCenter('Login')
            }}>Ingresar</span>
        </div>
)
}

const CenterLoginRegister=({insertSitePage})=>{
    const [siteCenter, insertSiteCenter] = useState('Login')

    //controla la renderizacionde los componentes del center (Login, Register y forwardPass)
    const Render=({...rest})=>{

        //funcion para filtrar los componentes que se van a renderizar (el primer parametro, es un objeto con los componentes, la key del objeto de el componente debe ser igual al valor por el cual se le va a filtrar)
        return filterComponents(
            {
                Login: <Login {...rest}/>
            }, siteCenter)     
    }

    useEffect(() => {
        insertSitePage('Login')
    }, [insertSitePage])
    
    return (
        <section className="hero is-fullheight">
            <div className="hero-head">
                <NavbarBasic/>
            </div>
            <div className="hero-body is-centered">
                <Render SelectCenter ={SelectCenter} insertSiteCenter={insertSiteCenter}/>   
            </div>
        </section>
    )
}

const mapStateToProps = (state) => ({
	sitePage:state.sitePage.sitePage
});

export default connect (mapStateToProps,{insertSitePage}) (CenterLoginRegister)