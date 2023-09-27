import React, {useState} from 'react'

//components
import StepNameL from './StepIdentification'
import StepIdentificationP from './StepContact'
import StepEmailP from './StepCredentiales'
import Steps from 'components/steps/Steps'
import StepSignature from './StepSignature'
import 'animate.css';

//react-router-dom
import {Link} from 'react-router-dom'

//helpers
import {filterComponents} from 'helpers/filters/filterComponents'

const Register=({SelectCenter, insertSiteCenter})=>{

    //estado para almacenar la informacion de registro, que luego sera validada y saneada para enviar a la Api-Rest
    /* const [register, insertRegister] = useState({
        name:"",
        lastname:"",
        identification:"",
        number:"",
        email:"",
        pass:""
    }) */

    //estado para controlar las etapas del formulario de registro (existen 3 etapas)
    const [step, insertStep] = useState(1)

    const Render=({...rest})=>{
        //funcion para filtrar los componentes que se van a renderizar (el primer parametro, es un objeto con los componentes, la key del objeto de el componente debe ser igual al valor por el cual se le va a filtrar)
        return filterComponents(
            {
                1: <StepNameL {...rest}/>,
                2: <StepIdentificationP {...rest}/>,
                3: <StepSignature {...rest}/>,
                4: <StepEmailP {...rest}/>,
            }, step)     
    }

    return(
        <React.Fragment>
            <div className="box pl-5 pr-5 z-index-1 animate__animated animate__fadeInRight">
                <SelectCenter insertSiteCenter={insertSiteCenter} site='Register'/>
                <div className='mb-5 mr-5 ml-5'>
                    <p className='is-size-7 has-text-centered '>Ingrese los datos solicitados para continuar con el proceso</p>
                </div>
                <Steps 
                    number={4} 
                    numberActive={step} 
                    insertStep={insertStep} 
                    key={step} 
                    titles={{title1:'Identificacion',title2:'Informacion de Contacto',title3:'Informacion de Empresa',title4:'Credenciales de Ingreso'}}
                />
                <Render insertStep={insertStep}/>

                <div className='mb-4'>
                    <Link to="/recuperar/contrasena">
                        <p className='is-size-7 has-text-centered has-text-grey'>Recuperar contraseña</p>
                    </Link>
                </div>
                <div className='mb-4'>
                    <p className='is-size-8 has-text-centered has-text-grey'>2022 | Servicio Autonomo de la Propiedad intelectual</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Register