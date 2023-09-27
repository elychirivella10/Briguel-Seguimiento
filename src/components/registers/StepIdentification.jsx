import React, {useState} from 'react'

const StepNameL=({insertStep})=>{
    const [typeIdentification, insertTypeIdentification] = useState('V')
    const [identification, insertIdentification] = useState(0)

    return(
        <div className='mb-5'>
            <form className="field" >
                <div className="field is-grouped mb-0">
                    <div className="control has-icons-right pb-4 is-expanded">
                        <input className="input" type="text" placeholder="Nombre" name="name"/>
                    </div>

                    <div className="control has-icons-right pb-4 is-expanded">
                        <input className="input" type="password" placeholder="Apellido" name="lastname" />
                        <span className="icon is-small is-right">
                            <i className="fas fa-user"></i>
                        </span>
                    </div>
                </div>

                <div className="field has-addons pb-4 mb-2">
                    <p className="control">
                        <span className="select">
                        <select name="typeIdentification" onChange={(e)=>{
                            insertTypeIdentification(e.target.value)
                        }}>
                            <option value="V">V</option>
                            <option value="E">E</option>
                        </select>
                        </span>
                    </p>
                    <p className="control">
                        <span className="button is-static">
                            {typeIdentification}
                        </span>
                    </p>
                    <p className="control is-expanded has-icons-right">
                        <input className="input" type="number" value={identification} placeholder="Identificacion" maxLength={10} onChange={(e)=>{
                            insertIdentification(e.target.value)
                        }}/>
                        <span className="icon is-small is-right">
                            <i className="fas fa-passport"></i>
                        </span>
                    </p>
                </div>
                <button className = "button is-fullwidth is-blue" onClick={(e)=>{
                    e.preventDefault()
                    insertStep(2)
                }}>Siguiente</button>	
            </form>
        </div>
    )
}
export default StepNameL