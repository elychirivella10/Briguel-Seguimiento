import React, {useEffect} from 'react'
import Card from 'components/card/Card'

//comp 
import List from 'components/list/List'
import LegendStatus from 'components/help/LegendStatus'

import {connect, useSelector} from 'react-redux'
import {getRequirements} from 'actions/requirementActions'
import { resetTask } from 'actions/requirementActions'

//router dom
import { Link } from 'react-router-dom'

const DepList = ({getRequirements, direccionL,direccionG,despacho, resetTask}) =>{
    useEffect(() => {
        getRequirements(1, 10, 'direccionL')
        getRequirements(1, 10, 'despacho')
        getRequirements(1, 10, 'direccionG')

        return function clean () {
            resetTask()
        }   
    }, [])
    
    return(
        <div className="columns is-centered">
            <div className="column is-12">
                <LegendStatus arr={[
                    {'title':'Culminado', 'type':'culminado'},
                    {'title':'Por Vencer', 'type':'por_vencer'},
                    {'title':'Vencido', 'type':'vencido'},
                ]}/>
                <div className="columns">
                    <div className="column is-pointer">
                        <Link to='direccionG'>
                            <Card 
                                title={'DIRECCION GENERAL'}
                                hover={'has-hover-yellow'}
                                
                                content={
                                    <List titles = {{title1:'N° Requerimiento', title2:'Formato'}}
                                    data={direccionG}
                                    exclution='updated'
                                    limit="51vh"
                                    keyC = {30}
                                    link='direccionG/'
                                    overflow="auto"
                                    dataRender={['title', 'initial_date']}/>
                                }
                                header={direccionG.length}
                            />
                        </Link>
                    </div>
                    <div className="column is-pointer">
                        <Link to='despacho'>
                            <Card
                                title={'DESPACHO'}
                                hover={'has-hover-blue'}
                                content={
                                    <List titles = {{title1:'N° Requerimiento', title2:'Formato', title3:'Categoria', title4:'Trabajador Asignado', title5:''}}
                                    data={despacho}
                                    exclution='updated'
                                    limit="51vh"
                                    keyC = {40}
                                    link='despacho/'
                                    overflow="auto"
                                    dataRender={['title', 'initial_date']}/>
                                }
                                header={despacho.length}
                            />
                        </Link>
                    </div>
                    <div className="column is-pointer">
                        <Link to='direccionL'>
                            <Card
                                title={'DIRECCIONES DE LINEA'}
                                hover={'has-hover-red'}
                                content={
                                    <List titles = {{title1:'N° Requerimiento', title2:'Formato', title3:'Categoria', title4:'Trabajador Asignado', title5:''}}
                                    data={direccionL}
                                    exclution='updated'
                                    limit="51vh"
                                    keyC = {50}
                                    link='direccionL/'
                                    overflow="auto"
                                    dataRender={['title', 'initial_date']}
                                    />
                                }
                                header={direccionL.length}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
	despacho:state.tasks.despacho,
	direccionG:state.tasks.direccionG,
	direccionL:state.tasks.direccionL
});

export default connect (mapStateToProps,{getRequirements, resetTask}) (DepList) 