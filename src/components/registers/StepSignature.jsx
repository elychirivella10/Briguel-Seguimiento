import React, {useState} from 'react'

const StepSignature=({insertStep})=>{
    const [typeSignature, insertTypeSignature] = useState('J')
    const [signature, insertSignature] = useState(0)
    return(
        <div className='mb-5'>
            <form className="field" >
                <div className="control has-icons-right pb-4 mb-0">
                    <input className="input" type="text" placeholder="Nombre Empresa o Bufete" name="signature"/>
                    <span className="icon is-small is-right">
                        <i className="fas fa-briefcase"></i>
                    </span>
                </div>
                
                <div className="field has-addons pb-4 mb-2">
                    <p className="control">
                        <span className="select">
                        <select name="typeIdentification" onChange={(e)=>{
                            insertTypeSignature(e.target.value)
                        }}>
                            <option value="J">J</option>
                        </select>
                        </span>
                    </p>
                    <p className="control">
                        <span className="button is-static">
                            {typeSignature}
                        </span>
                    </p>
                    <p className="control is-expanded">
                        <input className="input" type="number" value={signature} placeholder="Identificacion" maxLength={10} onChange={(e)=>{
                            insertSignature(e.target.value)
                        }}/>
                    </p>
                </div>
                <button className = "button is-fullwidth is-blue" onClick={(e)=>{
                    e.preventDefault()
                    insertStep(3)
                }}>Siguiente</button>	

                
            </form>
        </div>
    )
}
export default StepSignature