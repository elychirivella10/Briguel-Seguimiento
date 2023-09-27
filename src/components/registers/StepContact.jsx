import React, {useState} from 'react'

const StepIdentificationP=({insertStep})=>{
    const [phone, insertPhone] = useState()
    return(
        <div className='mb-5'>
            <form className="field" >
                <div className="control has-icons-right pb-4">
                    <input className="input" type="email" placeholder="Email" name="email"/>
                    <span className="icon is-small is-right">
                        <i className="fas fa-envelope"></i>
                    </span>
                </div>

                <div className="control has-icons-right pb-4 mb-2">
                    <input className="input" type="number" placeholder="Celular" onKeyUp={(e)=>{
                    }} name="phone"/>
                    <span className="icon is-small is-right">
                        <i className="fas fa-phone"></i>
                    </span>
                </div>
                <button className = "button is-fullwidth is-blue" onClick={(e)=>{
                    e.preventDefault()
                    insertStep(3)
                }}>Siguiente</button>	
            </form>
        </div>
    )
}
export default StepIdentificationP