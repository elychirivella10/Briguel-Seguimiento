import React,{useEffect}from 'react'

import Panel from 'components/Panel/Panel'

import { useParams } from 'react-router-dom'

import { getRequirements } from 'actions/requirementActions'

import {connect} from 'react-redux'

import TableComp from 'components/table/Table'

import { columns } from './columnsList'

import Export from 'components/export/Export'

const TasksList = ({data, getRequirements}) =>{

    useEffect(() => {
      getRequirements(1,50,dep)
    }, [])
    

    const {dep} = useParams('dep')
    return(
        <div className="columns is-multiline">
            <div className="column is-12">
                <Panel title={dep} subtitle="lista"/>
            </div>
            <div className="column is-10">
                <TableComp data={data[dep]} columns={columns} expansible={'description'} titleExpansible={'Descripcion'}/>
            </div>
            <div className="column is-2">
                <Export/>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
	data:state.tasks
});

export default connect (mapStateToProps,{getRequirements}) (TasksList) 