import React  from "react";

const ContenTimeLine=({data})=>{
    if (data) {
        //se recorre data con un map, para poder iterar sobre todos los datos que estan llegando a la lista
        let content = []
        data.map((d)=>{
            //se recorre cada objeto que se encuentra en cada posicion del array que se itero con el map y se general los elementos conten de la lista
            const c = <React.Fragment><div className="timeline-item is-primary"><div className="timeline-marker is-outlined is-primary"></div><div className="timeline-content"><p className="heading">{d.fecha}</p><p>{d.description}</p></div></div></React.Fragment>
            return content.push(c)
        })

        return content
    }else{
        return null
    }
}
export default ContenTimeLine
