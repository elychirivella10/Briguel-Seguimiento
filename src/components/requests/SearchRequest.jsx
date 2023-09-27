import React, {useState} from 'react'

//importar axios
import axios from 'axios'

//var
import {rutaAxios} from 'variablesGoblales'

const SearchRequest=({insertRequests, requests})=>{
    
    const [state, insertState] = useState({
        num_request:"",
        name:"",
        categorie:"",
        approach:""
    })

    
    const getRequest =async(e)=>{       
        const peticion = await axios.get(`${rutaAxios}requests/consult/${state.num_request}`)
        insertState({
            ...peticion.data
        })
    }

    const insertRequest=(e)=>{
        insertRequests([
            ...requests,
            {
                ...state
            }
        ])
    }    
    return(
        <React.Fragment>
            <div className="field is-horizontal mb-5">

                <div className="field-label is-normal">
                    <label className="label">N Solicitud</label>
                </div>
                <div className="field-body">
                    <div className="field has-addons" >
                        <div className="control has-icons-right pb-4 is-small">
                            <input className="input is-small" type="text"  placeholder="N Solicitud" value={state.request} name="num_request" onChange={(e)=>{
                                insertState({
                                    ...state,
                                    [e.target.name]:e.target.value
                                })
                            }}/>
                            <span className="icon is-small is-right">
                                <i className="fas fa-magnifying-glass"></i>
                            </span>
                        </div> 
                        <div className="control">
                            <button className="button is-info" onClick={getRequest}>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {
              state.request?
                <figure className="image is-128x128">
                    <img src={`http://172.16.0.30/graficos/marcas/ef${state['request'].slice(0,4)}/${state['request']}.jpg`} alt=""/>
                </figure>
              :null  
            }            

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Nombre</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control has-icons-right pb-4 is-small">
                            <input className="input" type="text" placeholder="Nombre" readOnly value={state.name} name="name"/>
                            <span className="icon is-small is-right">
                                <i className="fas fa-user"></i>
                            </span>
                        </div> 
                    </div>
                </div>
            </div>          

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Categoria</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control has-icons-right pb-4 is-small">
                            <input className="input" type="text" placeholder="Categoria" readOnly value={state.categorie} name="categorie"/>
                            <span className="icon is-small is-right">
                                <i className="fas fa-bars-staggered"></i>
                            </span>
                        </div> 
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Descripcion</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control has-icons-right pb-4 is-small is-expanded">
                            <textarea className="textarea" placeholder="Descripcion" name="approach" onChange={(e)=>{
                                insertState({
                                    ...state,
                                    [e.target.name]:e.target.value
                                })
                            }}/>
                            <span className="icon is-small is-right">
                                <i className="fas fa-comment"></i>
                            </span>
                        </div> 
                    </div>
                </div>
            </div>
            <button className="button is-primary is-fullwidth" onClick={insertRequest}>Agregar Solicitud</button>
        </React.Fragment>
    )
}
export default SearchRequest