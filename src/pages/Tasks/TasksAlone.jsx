import React, {useEffect, useState} from 'react'

import axios from 'axios'
import { rutaAxios } from 'variablesGoblales'

import { useParams } from 'react-router-dom'

import Panel from 'components/Panel/Panel'
import Appointments from 'components/appointments/Appointments'
import TableComp from 'components/table/Table'
import { columns } from './columnsAlone'
import EditButton from 'components/help/EditButton'

const TasksAlone = () =>{
    const [notes, setNotes] = useState([])
    const [task, setTask] = useState([])
    let {id} = useParams('id')
    let {dep} = useParams('dep')

    useEffect(() => {
        getTask(id)
        getNotes(id)
    }, [])
    


    const getTask = async (id)  =>{
        const respuesta = await axios.get(`${rutaAxios}tasks/${id}`)
        setTask(respuesta.data)
    }
    const getNotes = async (id)  =>{
        const respuesta = await axios.get(`${rutaAxios}notes/${id}/1/50`)
        setNotes(respuesta.data.notes)
    }

    return(
        <div className="columns is-centered is-multiline">
            <EditButton id={id} dep={dep} url={'/tasks/edit'}/>
            <div className="column is-12">
                <Panel title={task.title} subtitle={`N°${task.id}`} 
                    data={[
                        {
                            title:"Tarea",
                            description:task.title
                        },
                        {
                            title:"Area",
                            description:task.area
                        },
                        {
                            title:"Tipo",
                            description:task.type_task
                        },
                        {
                            title:"Fecha inicio",
                            description:task.initial_date
                        },
                        {
                            title:"Fecha estimada cierre",
                            description:task.estimated_date
                        },
                        {
                            title:"Fecha cierre",
                            description:task.due_date
                        },
                        {
                            title:"Estatus",
                            description:task.status

                        },
                        {
                            title:"Responsable",
                            description:task.direccion

                        },
                        {
                            title:"Descripcion",
                            description:task.description
                        }
                    ]}
                />
            </div>
            <div className="column is-9">
                <TableComp pagination={{ pageSize: 5 }} columns={columns} data={notes} size="small" expansible={'name'} titleExpansible = 'Autor'/>
            </div>
            <div className="column is-3">
                <Appointments id={id} getNotes={getNotes} dep={dep}/>
            </div>
        </div>
    )
}
export default TasksAlone