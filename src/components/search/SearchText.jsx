import React from 'react'

const SearchText=()=>{
    return(
        <div className="box">
            <p className=" has-text-weight-semibold mb-5">Busqueda</p>
            <div className="control has-icons-right pb-4">
                <input className="input is-small" type="text" placeholder="Busqueda" name="Buscar"/>
                <span className="icon is-small is-right">
                    <i className="fas fa-magnifying-glass"></i>
                </span>
            </div>
            <button className = "button is-fullwidth is-blue">Buscar</button>
        </div>
    )
}
export default SearchText