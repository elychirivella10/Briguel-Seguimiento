import React, {useState} from 'react'

//components
import SearchRequest from 'components/requests/SearchRequest'
import List from 'components/list/List'
import Panel from 'components/Panel/Panel'
import Blocker from '../../components/login/Blocker'

//axios
import axios from 'axios'
import { rutaAxios } from 'variablesGoblales'

//alert
import alerta from 'components/alert/Alert'

//react-router-dom
import { useNavigate } from "react-router-dom";

/*aca se manda cantidad de solicitudes, formato de cita, user, 1,3*/

const RequirementsRegister=()=>{
    const navigate = useNavigate();
    const [requests, insertRequests] = useState([

    ])

    const [requirements, insertRequirement] = useState({
        amount_requests:1,
        id_format_appointment:1,
        id_user:2,
        id_condition:1,
        id_status:1,
        id_worker:2
    })

    const deleteRequest=(request)=>{
        insertRequests(
            requests.filter(r=>r.request !== request)
        )
    } 

    const insertRequirementS = async () => {
        if (requests.length>0) {
            const respuesta = await axios.post(`${rutaAxios}requirements`,{...requirements})
            if (respuesta.data.requirements_id) {
                requests.map(r=>{
                    delete r.name
                    delete r.categorie
                    r.id_requirement = respuesta.data.requirements_id
                })
                const respuesta2 = await axios.post(`${rutaAxios}requests`,[...requests])
                if (respuesta2.data.id_solicitud) {
                    
                    alerta.open({type:"success", message:'Se ingreso el Requerimiento correctamente'})
                    return navigate(`/requirements/list/${respuesta.data.requirements_id}`, { replace: true });
                }
            }
        }else{
            alerta.open({type:"warning", message:'Ingrese una solicitud'})
        }
    }
    

    return( 
        <div className="columns is-centered is-multiline">
            <Blocker />
            <div className="column is-12">
                <Panel title='Requerimientos' subtitle='Ingresar' foot={
                        {
                            foot:{
                            title:'Cantidad de solicitudes',
                            value:requests.length
                            }
                        }
                    }
                />
            </div>
            <div className="column is-6">
                <div className="box">
                    <SearchRequest insertRequests={insertRequests} requests={requests}/>
                </div>
            </div>
            <div className="column is-6">
                <List 
                    data={requests}
                    limit="39vh"
                    overflow="auto"
                    exclution="description"
                    control={true}
                    deleteRequest={deleteRequest}
                    link={false}
                />
            </div>
            <div className="column is-12">
                <div className="box">
                    <button className="button is-primary is-fullwidth" onClick={insertRequirementS}>Ingresar Requerimiento</button>
                </div>
            </div>
        </div>
    )
}
export default RequirementsRegister