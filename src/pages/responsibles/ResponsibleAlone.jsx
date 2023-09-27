import React, {useEffect, useState} from "react";

import Panel from "components/Panel/Panel";
import EditButton from "components/help/EditButton";
import TableComp from "components/table/Table";
import { columns } from "pages/responsibles/columnsList";

import { getResponsible, getTasksByResponsible } from "helpers/responsibles";

//router-dom
import { useParams } from "react-router-dom";

const ResponsibleAlone = () => {
    const [responsible, setResponsible] = useState({})
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        getResponsible(id, setResponsible)
        getTasksByResponsible(id, setTasks)
    }, [])
    

    let {id} = useParams('id')
    return(
        <div className="columns is-centered is-multiline">
        <EditButton id={id} url={'/responsables/edit'}/>
        <div className="column is-12">
            <Panel title={responsible.direccion} subtitle={`${responsible.nombre}`}    
        />
        </div>
        <div className="column is-12">
            <TableComp pagination={{ pageSize: 5 }} columns={columns} data={tasks} size="small" expansible={'name'} titleExpansible = 'Autor'/>
        </div>
    </div>
    )
}
export default ResponsibleAlone