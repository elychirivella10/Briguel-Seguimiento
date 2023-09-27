import React from 'react'
import { useEffect, useState } from 'react';

import { getDashTop, getDashMid, getDashBot, getTypeTask, getDashStatus } from 'helpers/helpersDashboard';

//graficos
import Area from '../../components/graficos/Area'
import BarGraf from 'components/graficos/Proyectos'
import Basic from 'components/graficos/Basic';
import XY from 'components/graficos/xy';
import Donut from 'components/graficos/donut';

const Dashboard = () => {
  const [dashTop, setDashTop] = useState([])
  const [dashMid, setDashMid] = useState([])
  const [dashMidStatus, setdashMidStatus] = useState([])
  const [dashBot, setDashBot] = useState([])
  const [typeTask, setTypeTask] = useState([])
  const [typeTaskSelect, setTypeTaskSelect] = useState(0)
  useEffect(() => {
    if (dashTop.length===0) {
      getDashTop(setDashTop)
    }
    if (dashMid.length===0) {
      getDashMid(setDashMid)
    }
    if (dashBot.length===0) {
      getDashBot(setDashBot)
    }

    getDashStatus(setdashMidStatus, 1)
    getTypeTask(setTypeTask)
  }, [])
  

  return (
    <div className='columns is-multiline'>  
      <div className="column is-4">
          <Basic
              title = "Direccion General"
              icon = "yellow"
              reportes ={dashTop.length>0?dashTop[1].total:0}
              llave="porcentaje_abastecimiento"
              nomenclatura="Tareas"
          />
      </div> 
      <div className="column is-4">
          <Basic
              title = "Despacho"
              icon = "blue"
              reportes ={dashTop.length>0?dashTop[0].total:0}
              llave="porcentaje_abastecimiento"
              nomenclatura="Tareas"
          />
      </div> 
      <div className="column is-4">
          <Basic
              title = "Direcciones de Linea"
              icon = "red"
              reportes ={dashTop.length>0?dashTop[2].total:0}
              llave="porcentaje_abastecimiento"
              nomenclatura="Tareas"
          />
      </div> 
      <div className="column is-9">
        <div className="box height-is-total is-primary bold">
          <p className = "text-anchor has-text-weight-bold	">Tareas</p>
          <p>Cantidad de tareas por direcciones de linea</p>
          <BarGraf ancho="100%"
            fill_2="#fff"
            fill="#ffd000"
            fill_3="#28d778"
            background="rgba(98,252,198,0.2)"
            graficosReducer={dashMid.length>0?dashMid:[]}
          />
        </div>
      </div> 
      <div className="column is-3">
          <div className="box height">
              <div className='mt-2'>
                  <h2 className='has-text-weight-medium'>Tipos de tareas</h2>
              </div>

              <div className="field mt-2 pr-4 pl-4">
                <div className="control">
                  <div className="select is-rounded">
                      <select  name="estado" onChange={(e)=>{
                        getDashStatus(setdashMidStatus, e.target.value)
                      }}>
                          {
                            typeTask.map((t,index)=>(
                              <option value={t.id} key={index}>{t.tipo_tarea}</option>
                            ))
                          }
                      </select>
                  </div>
                </div>
              </div>
              <Donut
                  height={300}
                  data={dashMidStatus.length>0?dashMidStatus:[]}
              />
          </div>
      </div>
      <div className="column is-12">
          <div className="box height">
              <div className='mt-2'>
                <h2 className='has-text-weight-medium'>Tareas por meses</h2>
              </div>
              <XY
              showX={true}
              legend={true}
              height={300}
              showY={true}
              markersSize={4}
              stroke={3.5}
              data={dashBot.length>0?dashBot:[]}
              color={['#0056b8', '#0056b8']}
              />
          </div>
      </div> 
    </div>
    
  )
}


export default Dashboard