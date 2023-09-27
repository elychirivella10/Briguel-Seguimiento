import React, {useEffect} from 'react'

import CardAntd from 'components/card/CardAntd'

//redux
import {connect} from 'react-redux'
import {getResponsibles} from 'actions/responsiblesActions'
import Export from 'components/export/Export'
import SearchDate from 'components/search/SearchDate'
import SearchText from 'components/search/SearchText'



const ResponsiblesList=({getResponsibles, responsibles})=>{

    useEffect(() => {
        getResponsibles(1,50)
    }, [getResponsibles])
    
    return(
        <div className='columns is-multiline'> 
            <div className="column is-10">
                        <div className="columns is-multiline">
                            {responsibles? responsibles.map((a, index)=>(
                                <div className="column" key={index}>
                                    {<CardAntd key={index} title={a.direccion} description={a.nombre} id={a.id}/>}
                                </div>
                            )):null}
                            
                        </div>
            </div>
            <div className="column is-2">
                <SearchDate/>
                <Export/>
            </div>
                                  
        </div>
    )
}

const mapStateToProps = (state) => ({
	responsibles:state.responsible.responsibles
});

export default connect (mapStateToProps,{getResponsibles}) (ResponsiblesList)