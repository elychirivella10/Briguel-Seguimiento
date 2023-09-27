import React from 'react'

//general de titulos, se le pasa como argumentos los titulos, que llegan en un objeto
const Title=({titles})=>{
    let ar =[]

    //se hace un for in para recorrer las keys de del objeto y se agrega a los elementos de la lista de bulma
    for (let clave in titles){
        const title = <div className="list-item-content"><div className="list-item-title">{titles[clave]}</div></div>
        ar.push(title)
    }
    return ar
}


//componente principal, donde se hace llamado de los titlos y se agrega al un elemento padre
const RenderTitle=({...rest})=>{
    return(
            <div className="list-item has-background-transparent">
                <Title {...rest}/>
            </div>
    )
}
export default RenderTitle