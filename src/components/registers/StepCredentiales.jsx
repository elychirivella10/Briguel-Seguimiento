import React from 'react'

const StepEmailP=()=>{
    return (
            <React.Fragment>
                <div className='mb-5'>
                    <form className="field" >
                        <div className="control has-icons-right pb-4">
                            <input className="input" type="text" placeholder="Usuario" name="user"/>
                            <span className="icon is-small is-right">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </div>   

                        <div className="field has-addons pb-4 mb-2">
                            <div className="control has-icons-right is-expanded">
                                <input className="input" type="password" placeholder="Contraseña" name="pass" />
                                <span className="icon is-small is-right">
                                    <i className="fas fa-lock"></i>
                                </span>
                            </div>
                            <p className="control">
                                <span className="button is-static">
                                    <span className="d"></span>
                                </span>
                            </p>
                        </div>                 
                        <button className = "button is-fullwidth is-blue">Registrar</button>	
                    </form>
                </div>
            </React.Fragment>
        
    )
}
export default StepEmailP