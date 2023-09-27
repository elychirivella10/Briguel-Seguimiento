import React from 'react'

//helpers
import { colorList } from 'helpers/colors/colors'

//moment
import moment from 'moment'
import 'moment/locale/es';

//react-router-dom
import {Link} from 'react-router-dom';

//este componente se hizo para dar una solucion a la agregacion de las imagenes a los content, ya que no pueden esta en el mismo elemento y tampoco se podia poner como children
const Container=({children, data, index})=>{
    return(
        <React.Fragment>
            <div className="list-item has-background-transparent"><span className ={`list-item-image-name ${colorList(data[index].estimated_date, data[index].status)}`}></span></div>
            {children}
        </React.Fragment>
    )
}

const Control=({deleteRequest, data})=>{
    return(
        <div className="list-item-controls">
            <div className="buttons is-right">
                <button className="button" onClick={()=>{
                    deleteRequest(data.request)
                }}>
                    <span className="icon is-small">
                    <i className="fas fa-edit"></i>
                    </span>
                    <span>Edit</span>
                </button>
            </div>
        </div>
        
    )
}


//componente para generar la lista de contenido, cada elemento de la lista tiene N cantidad de conten
const Content=({data, exclution, control, link, dataRender, ...rest})=>{

    moment.locale('es')
    let ar =[]
    //se recorre data con un map, para poder iterar sobre todos los datos que estan llegando a la lista
    data.map((d, index)=>{
        let content = []

        for (let index = 0; index < dataRender.length; index++) {
            if (dataRender.index=== 'id') {
                const c =<div className="list-item-content" key = {index}><div className="list-item-title" key = {index}>N°{d.id}</div> <div className="list-item-description" key = {index}>{d[dataRender[index]]}</div></div>
                content.push(c)
            }else{
                const c =<div className="list-item-content" key = {index}><div className="list-item-title has-text-weight-normal" key = {index} title = {d[dataRender[index]]}>{dataRender[index]==='initial_date'?moment(d[dataRender[index]]).format('L'): typeof d[dataRender[index]] === "string"?d[dataRender[index]].slice(0,25)+'...':d[dataRender[index]]}</div></div>
                content.push(c)
            }     
        }
        //se recorre cada objeto que se encuentra en cada posicion del array que se itero con el map y se general los elementos conten de la lista
        
        let val =link===false?<div key={index} className={`list-item ${index+1===data.length?"":"mb-3"}`}><Container data={data} index={index}>{content}{control ===true ?<Control data={d} {...rest}/>:null}</Container></div>:<Link to={link?link+d.id:`${d.id}`}><div key={index} className={`list-item ${index+1===data.length?"":"mb-3"}`}><Container data={data} key = {index} index={index}>{content}{control ===true ?<Control key = {index} data={d} {...rest}/>:null}</Container></div></Link>
        return ar.push(val)
    })

    return ar
}

//componente principal donde se agrega el contenido
const RenderContent=({keyC,...rest})=>{
    return(
            <Content  key={keyC} {...rest}/>
    )
}
export default RenderContent
